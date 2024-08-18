import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

type paginationParam = { data: [], itemsPerPage: number, route: string }

function usePagination({ data = [], itemsPerPage = 5, route = '' }: paginationParam) {
    const { pageNumber } = useParams<{ pageNumber: string }>();
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(Number(pageNumber) || 1);
    const maxPage = Math.ceil(data?.length / itemsPerPage);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    function currentData(): any[] {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    function jump(page: number) {
        if (page != currentPage) {
            if (route) {
                navigate(`${route}${page}`)
            }
            setCurrentPage(page);
        }


    }




    return { next, prev, jump, currentData, currentPage, maxPage }
}

export default usePagination