import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <p
                className="cursor-pointer text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                >
                FKIP Universitas Pakuan 
              </p>
            </Link>
            <div  className="text-white cursor-pointer text-lg bg-transparent block lg:hidden ">
                <PagesDropdown />
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col px-8 lg:flex-row list-none lg:ml-auto">

              <li className="flex text-xs items-center text-white">
                <a className="p-8"  href="https://fkip.unpak.ac.id/tentang-kami" passHref={true}>
                Tentang Kami
                </a>
              </li>
              <li className="flex text-xs items-center text-white">
                <a className="p-8" href="https://pmb.unpak.ac.id/" passHref={true}>
                Pendaftaran
                </a>
              </li>
              

              <li className="flex items-center">
                <PagesDropdown />
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
