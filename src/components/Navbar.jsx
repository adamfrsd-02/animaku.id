import Link from "next/link";
import React from "react";

const Navbar = () => {
  const defaultClass =
    "block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-slate-100 mr-4 text-white";
  const activeClass =
    "block mt-4 lg:inline-block lg:mt-0 text-lg hover:text-gray-200 mr-4 underline underline-offset-8 decoration-4 decoration-[#1D4ED8] text-white";

  const showMenu = () => {
    const menu = document.querySelector(".mobile-menu");

    //check if menu is hidden
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  return (
    <>
      <nav class="bg-transparent py-5 shadow-lg">
        <div class="md:px-16 px-5 mx-auto">
          <div class="flex justify-between">
            <div class="flex space-x-12">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  <span class="font-semibold text-white text-4xl">
                    Animaku.id
                  </span>
                </a>
              </div>
              <div class="hidden md:flex items-center space-x-4">
                <Link href="/">
                  <p className={(defaultClass, activeClass)}>Home</p>
                </Link>
                <Link href="/movies">
                  <p className={defaultClass}>Movies</p>
                </Link>
                <Link href="/anime">
                  <p className={defaultClass}>Anime</p>
                </Link>
              </div>
            </div>
            <div class="md:hidden flex items-center">
              <button
                class="outline-none mobile-menu-button"
                onClick={showMenu}
              >
                <svg
                  class=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden mobile-menu">
          <ul class="text-center">
            <Link href="/">
              <p className={(defaultClass, activeClass)}>Home</p>
            </Link>
            <Link href="/movies">
              <p className={defaultClass}>Movies</p>
            </Link>
            <Link href="/anime">
              <p className={defaultClass}>Anime</p>
            </Link>
          </ul>
        </div>
      </nav>
      <hr className="border-t-2 border-gray-500" />
    </>
  );
};

export default Navbar;
