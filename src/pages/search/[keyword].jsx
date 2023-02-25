import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Keyword = () => {
  const key = useRouter().query.keyword;

  const router = useRouter();

  const jikanAPIV4 = `https://api.jikan.moe/v4/anime?q=${key}`;

  const { isLoading, error, data } = useQuery(["anime", key], () =>
    fetch(jikanAPIV4).then((res) => res.json())
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  if (!data.data)
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-gradient-to-br from-[#233458] to-[#111827]">
      <Head>
        <title>Result of {key}</title>
      </Head>
      {/* import header component */}
      <Navbar />
      {/* body */}
      <center>
        {/* hero section */}
        <main className="flex flex-col px-10 md:px-24 py-3 min-h-screen gap-6">
          <p className="text-white text-left py-2">
            Your Search Result for{" "}
            <span className="font-bold underline underline-offset-8 decoration-4">
              {key}
            </span>
          </p>
          {/* card with gap 2*/}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.data.map((anime) => (
              <div class="max-w-sm h-auto rounded-md overflow-hidden shadow-lg bg-white">
                <img
                  class="w-full h-44 object-cover"
                  src={anime.images.jpg.image_url}
                  alt="Sunset in the mountains"
                />
                {/* anime category label limit to 2*/}
                <div class="px-6 pt-4 pb-2 text-left hidden md:block">
                  {anime.genres.slice(0, 2).map((genre) => (
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {genre.name}
                    </span>
                  ))}
                </div>

                <div class="px-6 pb-6 text-left mt-2">
                  <p
                    class="font-bold text-md mb-2 text-orange-600 hover:cursor-pointer"
                    onClick={(e) => router.push(`/detail/${anime.mal_id}`)}
                  >
                    {anime.title?.substring(0, 18)}
                  </p>
                  <p class="text-gray-700 text-sm text-justify">
                    {/* trim synopsis */}
                    {anime.synopsis?.substring(0, 50)}...
                  </p>
                </div>
                <hr className="pb-2 w-60 border-t-gray-300" />
                <div class="px-6 pb-6 text-left flex md:flex-row flex-col justify-between ">
                  <p className="text-gray-500 text-sm font-bold">
                    {anime.duration}
                  </p>
                  <Link
                    href={`/detail/${anime.mal_id}`}
                    className="hover:underline hover:decoration-4 hover:underline-offset-4"
                  >
                    <p className="text-sm font-bold  flex gap-2">
                      View Details{" "}
                      <img
                        src="/assets/icons/right-arr.png"
                        className="hidden md:block"
                        alt=""
                      />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* end of hero section */}
        {/* why section */}

        {/* end of why section */}
      </center>
    </div>
  );
};

export default Keyword;
