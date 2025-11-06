import { useState, useMemo } from "react";
import styles from "./Table.module.css";

export function Table({
    data = [],
    columns = [],
    actions,
    itemsPerPage = 10,
    title,
    children,
    searchable = true,
    sortable = true,
}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    // Función para buscar en los datos
    const filteredData = useMemo(() => {
        if (!searchable || !searchTerm) return data;

        return data.filter((item) =>
            columns.some((column) => {
                const value = item[column.key];
                return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
            })
        );
    }, [data, searchTerm, columns, searchable]);

    // Función para ordenar los datos
    const sortedData = useMemo(() => {
        if (!sortable || !sortConfig.key) return filteredData;

        const sorted = [...filteredData].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue === null || aValue === undefined) return 1;
            if (bValue === null || bValue === undefined) return -1;

            if (typeof aValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            if (sortConfig.direction === "asc") {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        return sorted;
    }, [filteredData, sortConfig, sortable]);

    // Calcular datos paginados
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
    }, [sortedData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    // Manejar el cambio de ordenamiento
    const handleSort = (columnKey) => {
        if (!sortable) return;

        setSortConfig((prev) => ({
            key: columnKey,
            direction: prev.key === columnKey && prev.direction === "asc" ? "desc" : "asc",
        }));
    };

    // Manejar búsqueda
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Resetear a la primera página
    };

    // Manejar cambio de página
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Generar números de página
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push("...");
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push("...");
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push("...");
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className={styles.tableContainer}>
            {/* Encabezado con título y children */}
            {(title || children) && (
                <div className={styles.tableHeader}>
                    {title && <h2 className={styles.tableTitle}>{title}</h2>}
                    {children && <div className={styles.tableHeaderActions}>{children}</div>}
                </div>
            )}

            {/* Buscador */}
            {searchable && (
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className={styles.searchInput}
                    />
                </div>
            )}

            {/* Contenedor con scroll para la tabla */}
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={`${styles.th} ${sortable ? styles.sortable : ""}`}
                                    onClick={() => sortable && handleSort(column.key)}
                                >
                                    <div className={styles.thContent}>
                                        <span>{column.label}</span>
                                        {sortable && sortConfig.key === column.key && (
                                            <span className={styles.sortIcon}>
                                                {sortConfig.direction === "asc" ? "↑" : "↓"}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                            {actions && <th className={styles.th}>Acciones</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, rowIndex) => (
                                <tr key={rowIndex} className={styles.tr}>
                                    {columns.map((column) => (
                                        <td key={column.key} className={styles.td}>
                                            {column.render
                                                ? column.render(row[column.key], row)
                                                : row[column.key]}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className={styles.td}>
                                            <div className={styles.actionsContainer}>
                                                {actions(row)}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + (actions ? 1 : 0)}
                                    className={styles.noData}
                                >
                                    No se encontraron resultados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
                <div className={styles.paginationContainer}>
                    <div className={styles.paginationInfo}>
                        Mostrando {(currentPage - 1) * itemsPerPage + 1} -{" "}
                        {Math.min(currentPage * itemsPerPage, sortedData.length)} de{" "}
                        {sortedData.length} registros
                    </div>
                    <div className={styles.pagination}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.paginationButton}
                        >
                            Anterior
                        </button>
                        {getPageNumbers().map((page, index) =>
                            page === "..." ? (
                                <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`${styles.paginationButton} ${
                                        currentPage === page ? styles.active : ""
                                    }`}
                                >
                                    {page}
                                </button>
                            )
                        )}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={styles.paginationButton}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
