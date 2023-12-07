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
  const endPage = Math.min(currentPage + 2, maxPageNr);

  const pages = generatePaginationNr(array).slice(startPage - 1, endPage);
  const buttons = pages.map((nr, index) => (
    <button
      className="bg-gray-600 text-orange-100 font-bold p-3 w-[100px]"
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
    <div className="w-full">
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
