"use client";
import React, { useState } from "react";
import Card from "./Card";
import ReactPaginate from "react-paginate";
import "../../css/pagination.css";
export default function Results({ results }) {
  const itemsPerPage = 10;
  const pageCount = Math.ceil(results.length / itemsPerPage);
  const [page, setPage] = useState(0);
  const handlePageClick = (data) => {
    let selected = data.selected;
    setPage(selected);
  };
  const paginatedData = results.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );
  return (
    <div>
      {/* cards */}
      <div className="max-w-6xl py-4 mx-auto sm:grid sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-5">
        {paginatedData.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center w-full px-2 py-4 space-y-4">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
}
