import { useState, useMemo, useEffect } from 'react';

/**
 * Hook personalizado para manejar paginación de cualquier array de datos
 * 
 * @param {Array} data - Array de datos a paginar
 * @param {number} itemsPerPage - Número de elementos por página (default: 10)
 * @param {number} initialPage - Página inicial (default: 1)
 * @returns {Object} Objeto con datos paginados y funciones de navegación
 */
export function usePagination(data = [], itemsPerPage = 10, initialPage = 1) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    // Calcular información de paginación
    const paginationInfo = useMemo(() => {
        const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
        const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
        
        const startIndex = (validCurrentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPageData = data.slice(startIndex, endIndex);
        
        return {
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
    }, [data, itemsPerPage, currentPage]);

    // Funciones de navegación
    const goToPage = (page) => {
        const newPage = Math.max(1, Math.min(page, paginationInfo.totalPages));
        setCurrentPage(newPage);
    };

    const nextPage = () => {
        if (paginationInfo.hasNextPage) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (paginationInfo.hasPrevPage) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const firstPage = () => {
        setCurrentPage(1);
    };

    const lastPage = () => {
        setCurrentPage(paginationInfo.totalPages);
    };

    const reset = () => {
        setCurrentPage(initialPage);
    };

    // Reset cuando cambian los datos
    useEffect(() => {
        if (data.length === 0) {
            setCurrentPage(1);
        } else if (currentPage > Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(1);
        }
    }, [data.length, itemsPerPage, currentPage]);

    return {
        ...paginationInfo,
        // Funciones de navegación
        goToPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        reset,
        // Estado
        setCurrentPage
    };
}

/**
 * Hook para paginación con filtros
 * Útil cuando necesitas paginar datos filtrados
 */
export function usePaginationWithFilters(data = [], filters = {}, itemsPerPage = 10, initialPage = 1) {
    // Filtrar datos basado en los filtros
    const filteredData = useMemo(() => {
        if (Object.keys(filters).length === 0) {
            return data;
        }

        return data.filter(item => {
            return Object.entries(filters).every(([key, value]) => {
                if (!value || value === '') return true;
                
                const itemValue = item[key];
                if (typeof itemValue === 'string') {
                    return itemValue.toLowerCase().includes(value.toLowerCase());
                }
                
                return itemValue === value;
            });
        });
    }, [data, filters]);

    const pagination = usePagination(filteredData, itemsPerPage, initialPage);

    // Reset page cuando cambian los filtros
    useEffect(() => {
        pagination.reset();
    }, [filters, pagination]);

    return {
        ...pagination,
        filteredData,
        originalDataLength: data.length,
        isFiltered: Object.values(filters).some(value => value && value !== '')
    };
}