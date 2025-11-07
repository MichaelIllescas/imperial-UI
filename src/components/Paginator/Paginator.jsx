import { useState, useEffect } from 'react';
import styles from "./Paginator.module.css";

export function Paginator({
    data = [],
    itemsPerPage = 10,
    currentPage: externalCurrentPage,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    visiblePages = 5,
    className = "",
    disabled = false,
    size = "medium",
    children,
    loading = false,
    animationDelay = 50,
}) {
    // Estado interno para currentPage si no se proporciona externamente
    const [internalCurrentPage, setInternalCurrentPage] = useState(1);
    const currentPage = externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage;
    
    // Calcular total de páginas basado en los datos
    const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
    
    // Validar currentPage
    const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
    
    // Calcular datos de la página actual
    const startIndex = (validCurrentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);
    
    // Información adicional
    const paginationInfo = {
        currentPageData,
        totalPages,
        currentPage: validCurrentPage,
        hasNextPage: validCurrentPage < totalPages,
        hasPrevPage: validCurrentPage > 1,
        totalItems: data.length,
        startIndex: startIndex + 1,
        endIndex: Math.min(endIndex, data.length),
        isEmpty: data.length === 0
    };
    
    // Efecto para sincronizar página actual si se proporciona externamente
    useEffect(() => {
        if (externalCurrentPage !== undefined && externalCurrentPage !== internalCurrentPage) {
            setInternalCurrentPage(externalCurrentPage);
        }
    }, [externalCurrentPage, internalCurrentPage]);

    // Función para manejar cambio de página
    const handlePageChange = (page) => {
        if (disabled || loading || page === validCurrentPage || page < 1 || page > totalPages) return;
        
        // Actualizar estado interno si no hay control externo
        if (externalCurrentPage === undefined) {
            setInternalCurrentPage(page);
        }
        
        // Llamar callback con página y datos
        if (onPageChange) {
            const newStartIndex = (page - 1) * itemsPerPage;
            const newEndIndex = newStartIndex + itemsPerPage;
            const newPageData = data.slice(newStartIndex, newEndIndex);
            onPageChange(page, newPageData, {
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
                totalItems: data.length,
                startIndex: newStartIndex + 1,
                endIndex: Math.min(newEndIndex, data.length)
            });
        }
    };

    // Calcular páginas visibles
    const getVisiblePages = () => {
        const pages = [];
        let startPage = Math.max(1, validCurrentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        // Ajustar startPage si endPage está al final
        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        // Agregar primera página y ellipsis si es necesario
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push("ellipsis-start");
            }
        }

        // Agregar páginas visibles
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Agregar ellipsis y última página si es necesario
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push("ellipsis-end");
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const visiblePageNumbers = getVisiblePages();

    // Si se proporciona children, usarlo como render prop
    if (children) {
        return (
            <div className={`${styles.paginatorWrapper} ${className}`}>
                <div className={styles.paginatorContent}>
                    {children(currentPageData, paginationInfo)}
                </div>
                
                {totalPages > 1 && (
                    <nav 
                        className={`${styles.paginator} ${styles[`paginator--${size}`]}`} 
                        aria-label="Paginación"
                        style={{
                            position: 'relative',
                            animationDelay: `${animationDelay * 2}ms`
                        }}
                    >
                        <ul className={styles.paginatorList} style={{ animationDelay: `${animationDelay}ms` }}>
                            {/* Botón Primera Página */}
                            {showFirstLast && (
                                <li className={styles.paginatorItem}>
                                    <button
                                        className={`${styles.paginatorButton} ${styles.paginatorFirst} ${
                                            validCurrentPage === 1 || disabled || loading ? styles.disabled : ""
                                        } ${loading ? styles.loading : ""}`}
                                        onClick={() => handlePageChange(1)}
                                        disabled={validCurrentPage === 1 || disabled || loading}
                                        aria-label="Primera página"
                                        title="Primera página"
                                    >
                                        <span className={styles.iconDouble}>«</span>
                                        <span className={styles.text}>Primera</span>
                                    </button>
                                </li>
                            )}

                            {/* Botón Página Anterior */}
                            {showPrevNext && (
                                <li className={styles.paginatorItem}>
                                    <button
                                        className={`${styles.paginatorButton} ${styles.paginatorPrev} ${
                                            validCurrentPage === 1 || disabled || loading ? styles.disabled : ""
                                        } ${loading ? styles.loading : ""}`}
                                        onClick={() => handlePageChange(validCurrentPage - 1)}
                                        disabled={validCurrentPage === 1 || disabled || loading}
                                        aria-label="Página anterior"
                                        title="Página anterior"
                                    >
                                        <span className={styles.iconSingle}>‹</span>
                                        <span className={styles.text}>Anterior</span>
                                    </button>
                                </li>
                            )}

                            {/* Números de página */}
                            {visiblePageNumbers.map((page) => {
                                if (typeof page === "string") {
                                    // Ellipsis
                                    return (
                                        <li key={page} className={styles.paginatorItem}>
                                            <span className={`${styles.paginatorButton} ${styles.ellipsis}`}>
                                                ...
                                            </span>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={page} className={styles.paginatorItem}>
                                        <button
                                            className={`${styles.paginatorButton} ${styles.paginatorNumber} ${
                                                page === validCurrentPage ? styles.active : ""
                                            } ${disabled || loading ? styles.disabled : ""} ${loading ? styles.loading : ""}`}
                                            onClick={() => handlePageChange(page)}
                                            disabled={disabled || loading}
                                            aria-label={`Página ${page}`}
                                            aria-current={page === validCurrentPage ? "page" : undefined}
                                            title={`Página ${page}`}
                                        >
                                            {page}
                                        </button>
                                    </li>
                                );
                            })}

                            {/* Botón Página Siguiente */}
                            {showPrevNext && (
                                <li className={styles.paginatorItem}>
                                    <button
                                        className={`${styles.paginatorButton} ${styles.paginatorNext} ${
                                            validCurrentPage === totalPages || disabled || loading ? styles.disabled : ""
                                        } ${loading ? styles.loading : ""}`}
                                        onClick={() => handlePageChange(validCurrentPage + 1)}
                                        disabled={validCurrentPage === totalPages || disabled || loading}
                                        aria-label="Página siguiente"
                                        title="Página siguiente"
                                    >
                                        <span className={styles.text}>Siguiente</span>
                                        <span className={styles.iconSingle}>›</span>
                                    </button>
                                </li>
                            )}

                            {/* Botón Última Página */}
                            {showFirstLast && (
                                <li className={styles.paginatorItem}>
                                    <button
                                        className={`${styles.paginatorButton} ${styles.paginatorLast} ${
                                            validCurrentPage === totalPages || disabled || loading ? styles.disabled : ""
                                        } ${loading ? styles.loading : ""}`}
                                        onClick={() => handlePageChange(totalPages)}
                                        disabled={validCurrentPage === totalPages || disabled || loading}
                                        aria-label="Última página"
                                        title="Última página"
                                    >
                                        <span className={styles.text}>Última</span>
                                        <span className={styles.iconDouble}>»</span>
                                    </button>
                                </li>
                            )}
                        </ul>

                        {/* Información de página actual */}
                        <div className={styles.pageInfo} style={{ animationDelay: `${animationDelay * 3}ms` }}>
                            <span className={styles.pageInfoText}>
                                📄 Página <strong>{validCurrentPage}</strong> de <strong>{totalPages}</strong> • 
                                📊 {paginationInfo.startIndex}-{paginationInfo.endIndex} de <strong>{data.length}</strong> elementos
                                {loading && <span style={{ marginLeft: '0.5rem' }}>🔄 Cargando...</span>}
                            </span>
                        </div>
                    </nav>
                )}
            </div>
        );
    }

    // Modo simple: solo retornar los datos paginados (para compatibilidad)
    return {
        currentPageData,
        totalPages,
        currentPage: validCurrentPage,
        hasNextPage: validCurrentPage < totalPages,
        hasPrevPage: validCurrentPage > 1,
        totalItems: data.length,
        startIndex: startIndex + 1,
        endIndex: Math.min(endIndex, data.length),
        isEmpty: data.length === 0,
        handlePageChange
    };
}