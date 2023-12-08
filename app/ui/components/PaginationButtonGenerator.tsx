"use client";
import generatePaginationNr from "@/app/utils/generatePaginationNr";
import { EventHandler, useState } from "react";
const PaginationButtonGenerator = ({
  array,
  handleClick,
}: {
  array: any[];
  handleClick: Function;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPageNr = generatePaginationNr(array).length;

  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(currentPage + 3, maxPageNr);

  const pages = generatePaginationNr(array).slice(
    startPage - 1,
    currentPage === 1 || 2 || 3
      ? currentPage === 1
        ? endPage + 3
        : currentPage === 2
        ? endPage + 2
        : endPage + 1
      : endPage
  );
  const buttons = pages.map((nr, index) => (
    <button
      className={`bg-gray-600 ${
        nr === currentPage ? `border border-4 border-red-200` : `""`
      } text-orange-100 font-bold p-3 w-[100px]`}
      key={index}
      onClick={() => handlePageChange(nr)}>
      {nr}
    </button>
  ));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleClick(page);
  };
  return (
    <div className="w-full flex flex-wrap justify-centerz">
      <button
        className="bg-gray-600 text-orange-100 font-bold p-3 w-[100px]"
        onClick={() => handlePageChange(1)}>
        First
      </button>
      {buttons}
      <button
        className="bg-gray-600 text-orange-100 font-bold p-3 w-[100px]"
        onClick={() => handlePageChange(maxPageNr)}>
        Last
      </button>
    </div>
  );
};

export default PaginationButtonGenerator;
