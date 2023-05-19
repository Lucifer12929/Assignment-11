import React from "react";
import DataFetch from "../dataFetch/DataFetch";
import { useState } from "react";
import Card from "../components/Card";
import Pages from "../components/Pages";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState();
  const { data, dataLoading } = DataFetch(page);
  const blogData = query
    ? data?.data?.filter((item) =>
        item?.title?.toLowerCase().includes(query?.toLowerCase())
      )
    : data?.data;

  return (
    <div className="relative bg-whitesmoke overflow-hidden text-left text-[1.5rem] text-gray font-quicksand">
      <div className="w-[min(1440px,98%)] mx-auto">
        <div className="flex justify-between items-center gap-5 py-0 sm:py-8 font-semibold">
          <h2 className=" text-xl sm:text-4xl">All articles</h2>
          <SearchBar query={query} setQuery={setQuery} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   items-start justify-start gap-[1.5rem] text-[1.25rem]">
          {/* mapping the articles data */}
          {dataLoading
            ? "loading..."
            : blogData?.map((item) => (
                <React.Fragment key={item.id}>
                  <Card item={item} />
                </React.Fragment>
              ))}
        </div>

        <Pages page={page} setPage={setPage} data={data} blogData={blogData} />
      </div>
    </div>
  );
};

export default Home;
