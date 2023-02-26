import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Header from "@/components/Header";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const Detail = () => {
  const id = useRouter().query.id;
  // fetch data from API
  const jikanAPI = `https://api.jikan.moe/v4/anime/${id}/full`;

  const { isLoading, isError, isSuccess, data } = useQuery(["anime", id], () =>
    fetch(jikanAPI).then((res) => res.json())
  );

  if (isLoading)
    return (
      <div className="h-screen">
        <div class="flex items-center justify-center h-screen">
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
    );
  if (isError) return <h1>Error...</h1>;

  console.log(data.data);
  // if (!data) return <h1>Loading...</h1>;

  return (
    <div className="bg-gradient-to-br from-[#233458] to-[#111827]">
      <Head>
        <title>{data.data.title}</title>
      </Head>
      {/* import header component */}
      <Navbar />
      {/* body */}
      <center>
        {/* hero section */}
        <main className="flex flex-col md:flex-row px-10 md:w-1/4 justify-center md:py-4  py-3 min-h-screen gap-6">
          <div className="left-side flex flex-col gap-5">
            <h1 className="text-white text-4xl font-bold text-center">
              {data.data.title}
            </h1>
            <img
              src={data.data.images.jpg.image_url}
              alt=""
              className="rounded-lg"
            />
            <Link href="/" className="bg-gray-700 rounded-lg py-2">
              <p className="text-white text-center py-2">Watch The Trailer</p>
            </Link>
          </div>
        </main>
        {/* end of hero section */}
        {/* why section */}

        {/* end of why section */}
      </center>
    </div>
  );
};

export default Detail;
