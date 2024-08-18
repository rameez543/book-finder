import { useState } from "react";

function usePagination(data:[]=[], itemsPerPage:number=5) {
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data?.length / itemsPerPage);

    function currentData():any[] {
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
    function jump(page:number) {
           
           setCurrentPage((currentPage) => page);
    }
    return { next, prev, jump, currentData, currentPage, maxPage }
}

export default usePagination