import Head from "next/head";
import React from "react";
import Header from "../components/Header";
// import { API_KEY, CONTEXT_KEY } from "../Keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  // console.log("key", process.env.API_KEY);

  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google-Clone search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  console.log(process.env.API_KEY);
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // After the SERVER has rendered... Pass the results to the client..

  return {
    props: {
      results: data,
    },
  };
}
