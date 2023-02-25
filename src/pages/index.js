import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";


const Home = () => {
  const router = useRouter();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // redirect to detail page
    router.push(`/search/${e.target.search.value}`);
  };
  return (
    <div className="bg-gradient-to-br from-[#233458] to-[#111827] min-h-screen">
      <Head>
        <title>Animaku.id - Homepage</title>
      </Head>
      <Navbar />
      {/* section */}
      <div className="flex flex-row justify-between min-h-[calc(100vh-120px)] md:px-8">
        <div className="md:flex flex-col justify-center  md:w-3/4 px-5 md:px-12 py-4 space-y-3">
          <h1 className="md:text-5xl text-4xl text-white font-regular">
            Find Your Favorites <br /> Anime Information Here !
          </h1>
          <p className="text-gray-400 text-lg md:w-3/4">
            In this website you can find your favorite anime information such as
            the synopsis, the cast, the genre, and the rating. Feel free to find
            your favorite anime information here !
          </p>
          {/* search bar with search icon*/}
          <form onSubmit={onSearchSubmit}>
            <label class="relative text-gray-400 focus-within:text-gray-600 block mt-10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="pointer-events-none w-10 h-10 px-2 absolute top-1/2 transform -translate-y-1/2 left-3"
              >
                <path
                  d="M16.7454 12.8835L13.6342 10.3801C14.638 9.348 15.1827 8.07354 15.1806 6.76153C15.1806 5.59307 14.7513 4.45086 13.9469 3.47933C13.1425 2.50779 11.9992 1.75058 10.6615 1.30343C9.32387 0.856281 7.85195 0.739287 6.43189 0.967241C5.01184 1.19519 3.70744 1.75786 2.68364 2.58408C1.65984 3.4103 0.962622 4.46297 0.680156 5.60897C0.39769 6.75497 0.542662 7.94283 1.09674 9.02234C1.65082 10.1019 2.58911 11.0245 3.79297 11.6737C4.99684 12.3228 6.4122 12.6693 7.86007 12.6693C9.48584 12.671 11.0651 12.2314 12.3439 11.4213L15.446 13.9321C15.5311 14.0013 15.6323 14.0563 15.7438 14.0938C15.8553 14.1313 15.9749 14.1506 16.0957 14.1506C16.2165 14.1506 16.3361 14.1313 16.4476 14.0938C16.5591 14.0563 16.6603 14.0013 16.7454 13.9321C16.8312 13.8635 16.8993 13.7818 16.9457 13.6918C16.9922 13.6018 17.0161 13.5053 17.0161 13.4078C17.0161 13.3103 16.9922 13.2138 16.9457 13.1238C16.8993 13.0338 16.8312 12.9521 16.7454 12.8835ZM2.36964 6.76153C2.36964 5.88519 2.69164 5.02853 3.29494 4.29988C3.89824 3.57123 4.75573 3.00331 5.75897 2.66795C6.76222 2.33259 7.86616 2.24485 8.9312 2.41581C9.99624 2.58678 10.9745 3.00878 11.7424 3.62844C12.5102 4.24811 13.0332 5.03761 13.245 5.89711C13.4569 6.75661 13.3481 7.64751 12.9326 8.45714C12.517 9.26677 11.8133 9.95877 10.9104 10.4456C10.0075 10.9325 8.94597 11.1924 7.86007 11.1924C6.40391 11.1924 5.0074 10.7256 3.97775 9.89461C2.94809 9.06366 2.36964 7.93666 2.36964 6.76153Z"
                  fill="#CDCDCD"
                />
              </svg>

              <input
                placeholder="Search your favorites anime.."
                name="search"
                class="form-input border border-gray-400 rounded-xl py-3 px-4 bg-transparent placeholder-gray-400 text-white appearance-none block pl-14 focus:outline-none w-full md:w-3/4"
              />
            </label>
          </form>
          <small className="text-left text-gray-400">
            * use japanese's title version only, e.g: shingeki no kyojin to
            search attack on titan
          </small>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center w-1/2">
          <img
            src="/assets/img/thumb.png"
            alt="online video"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
