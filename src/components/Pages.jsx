import React from "react";

const Pages = React.memo(({ page, setPage, data, blogData }) => {
  function changePage(type) {
    setPage((prev) => {
      return type === "next" ? prev + 1 : prev - 1;
    });
    window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <div className="py-12" aria-label="Page navigation example">
      <ul className="flex items-center justify-end h-12 list-none">
        <li>
          <button
            onClick={() => changePage("previous")}
            disabled={data?.page == 1 || !blogData?.length}
            className="block px-3 py-2 ml-0 cursor-pointer leading-tight bg-white text-gray-700 rounded-l-lg outline outline-1 outline-slate-300 hover:text-yellow disabled:text-gray-400"
          >
            Previous
          </button>
        </li>

        <li>
          <button
            onClick={() => changePage("next")}
            disabled={page == data?.total_page || !blogData?.length}
            className="block px-3 py-2 leading-tight cursor-pointer rounded-r-lg text-gray-700 bg-white outline outline-1 outline-slate-300 hover:text-yellow disabled:text-gray-400"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
});

export default Pages;
