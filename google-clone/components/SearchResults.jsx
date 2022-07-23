import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds){" "}
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="">
            <div className="peer w-fit ">
              <Link href={result.link}>
                <a className="text-sm truncate">{result.formattedUrl}</a>
              </Link>
            </div>
            <div className="w-fit peer-hover:underline hover:underline">
              <Link href={result.link}>
                <a>
                  <h2 className="truncate text-[1.10rem] text-blue-800 font-medium ">
                    {result.title}
                  </h2>
                </a>
              </Link>
            </div>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
