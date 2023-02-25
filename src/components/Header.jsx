//next.js header component
import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const Header = () => {
  const classActive =
    "text-white underline underline-offset-8 decoration-4 decoration-[#1D4ED8]";
  const classDefault =
    "text-white hover:cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-[#1D4ED8]";

  return (
    <>
      <header className="header px-16 py-6">
        <title>Animaku.id - Your Anime Information Partner !</title>
        <div className="header__content flex flex-row items-center gap-10">
          <Link href="/">
            <h1 className="logo text-white text-3xl font-bold">Animaku.id</h1>
          </Link>
          <ul className="header__nav flex flex-row justify-evenly gap-5">
            <li>
              <Link href="/">
                <p className={(classDefault, classActive)}>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className={classDefault}>Movies</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className={classDefault}>Anime</p>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <hr className="border-t-gray-500" />
    </>
  );
};

export default Header;
