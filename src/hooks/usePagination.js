import { useState } from "react";

const usePagination = (data, initialPage = 1, itemsPerPage = 4) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = data.length / itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return { totalPages, currentItems, currentPage, handlePageChange };
};

export default usePagination;
