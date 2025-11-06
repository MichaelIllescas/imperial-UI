import { useState, useRef } from "react";
import styles from "./FileUpload.module.css";

export function FileUpload({
  id,
  name,
  label = "Subir Archivos",
  accept = "*/*",
  multiple = false,
  maxSize = 10485760, // 10MB por defecto
  maxFiles = 5,
  disabled = false,
  required = false,
  variant = "default",
  size = "medium",
  showPreview = true,
  showFileList = true,
  dragAndDrop = true,
  helperText = "",
  error = "",
  onChange,
  onError,
  onRemove,
  className = "",
  ...props
}) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState(error);
  const fileInputRef = useRef(null);

  // Validar archivo
  const validateFile = (file) => {
    // Validar tamaño
    if (file.size > maxSize) {
      const sizeMB = (maxSize / 1024 / 1024).toFixed(2);
      return `El archivo "${file.name}" excede el tamaño máximo de ${sizeMB}MB`;
    }

    // Validar tipo si se especifica accept
    if (accept !== "*/*") {
      const acceptedTypes = accept.split(",").map((type) => type.trim());
      const fileExtension = `.${file.name.split(".").pop()}`;
      const fileMimeType = file.type;

      const isAccepted = acceptedTypes.some((type) => {
        if (type.startsWith(".")) {
          return fileExtension.toLowerCase() === type.toLowerCase();
        }
        if (type.endsWith("/*")) {
          return fileMimeType.startsWith(type.replace("/*", ""));
        }
        return fileMimeType === type;
      });

      if (!isAccepted) {
        return `El archivo "${file.name}" no es un tipo de archivo aceptado`;
      }
    }

    return null;
  };

  // Obtener tipo de archivo para vista previa
  const getFileType = (file) => {
    const mimeType = file.type;
    if (mimeType.startsWith("image/")) return "image";
    if (mimeType.startsWith("video/")) return "video";
    if (mimeType.startsWith("audio/")) return "audio";
    if (mimeType === "application/pdf") return "pdf";
    if (
      mimeType.includes("word") ||
      mimeType.includes("document") ||
      file.name.endsWith(".doc") ||
      file.name.endsWith(".docx")
    )
      return "document";
    if (
      mimeType.includes("sheet") ||
      mimeType.includes("excel") ||
      file.name.endsWith(".xls") ||
      file.name.endsWith(".xlsx")
    )
      return "spreadsheet";
    if (
      mimeType.includes("zip") ||
      mimeType.includes("compressed") ||
      file.name.endsWith(".zip") ||
      file.name.endsWith(".rar")
    )
      return "archive";
    return "file";
  };

  // Obtener icono según tipo de archivo
  const getFileIcon = (fileType) => {
    const icons = {
      image: "🖼️",
      video: "🎥",
      audio: "🎵",
      pdf: "📄",
      document: "📝",
      spreadsheet: "📊",
      archive: "📦",
      file: "📎",
    };
    return icons[fileType] || icons.file;
  };

  // Formatear tamaño de archivo
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  // Procesar archivos
  const processFiles = (fileList) => {
    const newFiles = Array.from(fileList);

    // Validar cantidad de archivos
    if (!multiple && newFiles.length > 1) {
      setErrorMessage("Solo se permite un archivo");
      if (onError) onError("Solo se permite un archivo");
      return;
    }

    const totalFiles = files.length + newFiles.length;
    if (multiple && totalFiles > maxFiles) {
      setErrorMessage(`Máximo ${maxFiles} archivos permitidos`);
      if (onError) onError(`Máximo ${maxFiles} archivos permitidos`);
      return;
    }

    // Validar cada archivo
    let hasError = false;
    const validFiles = [];

    for (const file of newFiles) {
      const validationError = validateFile(file);
      if (validationError) {
        setErrorMessage(validationError);
        if (onError) onError(validationError);
        hasError = true;
        break;
      }

      // Crear preview URL para imágenes
      const fileData = {
        file,
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: getFileType(file),
        preview: null,
      };

      if (fileData.type === "image") {
        fileData.preview = URL.createObjectURL(file);
      }

      validFiles.push(fileData);
    }

    if (!hasError) {
      setErrorMessage("");
      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      if (onChange) onChange(updatedFiles.map((f) => f.file));
    }
  };

  // Manejar cambio de input
  const handleInputChange = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      processFiles(fileList);
    }
  };

  // Manejar click en zona de drop
  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  // Manejar drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && dragAndDrop) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && dragAndDrop) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (!disabled && dragAndDrop) {
      const fileList = e.dataTransfer.files;
      if (fileList && fileList.length > 0) {
        processFiles(fileList);
      }
    }
  };

  // Remover archivo
  const handleRemoveFile = (fileId) => {
    const fileToRemove = files.find((f) => f.id === fileId);
    if (fileToRemove?.preview) {
      URL.revokeObjectURL(fileToRemove.preview);
    }

    const updatedFiles = files.filter((f) => f.id !== fileId);
    setFiles(updatedFiles);
    setErrorMessage("");

    if (onChange) onChange(updatedFiles.map((f) => f.file));
    if (onRemove) onRemove(fileToRemove?.file);
  };

  // Clases CSS
  const containerClassName = `
    ${styles.fileUpload}
    ${styles[`fileUpload--${variant}`]}
    ${styles[`fileUpload--${size}`]}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const dropzoneClassName = `
    ${styles.dropzone}
    ${isDragging ? styles["dropzone--dragging"] : ""}
    ${disabled ? styles["dropzone--disabled"] : ""}
    ${errorMessage ? styles["dropzone--error"] : ""}
    ${files.length > 0 ? styles["dropzone--hasFiles"] : ""}
  `.trim().replace(/\s+/g, " ");

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      {helperText && !errorMessage && (
        <p className={styles.helperText}>{helperText}</p>
      )}

      <div
        className={dropzoneClassName}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={id}
          name={name}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          required={required}
          onChange={handleInputChange}
          className={styles.input}
          {...props}
        />

        <div className={styles.dropzoneContent}>
          <div className={styles.uploadIcon}>📁</div>
          <p className={styles.dropzoneText}>
            {isDragging
              ? "Suelta los archivos aquí"
              : dragAndDrop
              ? "Arrastra archivos aquí o haz clic para buscar"
              : "Haz clic para buscar archivos"}
          </p>
          <p className={styles.dropzoneHint}>
            {accept !== "*/*" && `Formatos aceptados: ${accept}`}
            {accept !== "*/*" && maxSize && " • "}
            {maxSize && `Tamaño máx: ${formatFileSize(maxSize)}`}
            {multiple && ` • Máx archivos: ${maxFiles}`}
          </p>
        </div>
      </div>

      {errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}

      {files.length > 0 && showFileList && (
        <div className={styles.fileList}>
          {files.map((fileData) => (
            <div key={fileData.id} className={styles.fileItem}>
              {showPreview && fileData.preview && (
                <div className={styles.filePreview}>
                  <img
                    src={fileData.preview}
                    alt={fileData.name}
                    className={styles.previewImage}
                  />
                </div>
              )}

              {(!showPreview || !fileData.preview) && (
                <div className={styles.fileIcon}>
                  {getFileIcon(fileData.type)}
                </div>
              )}

              <div className={styles.fileInfo}>
                <p className={styles.fileName}>{fileData.name}</p>
                <p className={styles.fileSize}>
                  {formatFileSize(fileData.size)}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile(fileData.id);
                }}
                className={styles.removeButton}
                disabled={disabled}
                aria-label={`Remove ${fileData.name}`}
              >
                <span>✕</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
