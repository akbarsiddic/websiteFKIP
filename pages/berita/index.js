import React from "react";
import Link from "next/link";


// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/FooterSmall.js";


export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://fkip.unpak.ac.id/images/gedung-fkip.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 text-left">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Kabar Ter-Update
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Berita Terkini Seputar Fakultas Keguruan dan Ilmu pendidikan
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <Link href='/berita/berita1'>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link href='/berita/berita1'>
                    <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://fkip.unpak.ac.id/images/artikel/kearifan2.jpg"
                    />
                  </Link>
                    <h6 className="pt-8"><a href="/" className="text-lg font-semibold">Kearifan Lokal Masyarakat Kampung Sindang Barang</a></h6>
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/'>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                      <Link href='/'>
                    <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1574593983732-7b11df8b46c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcGVuaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  </Link>
                    <h6 className="pt-8"><a href="/" className="text-lg font-semibold">Judul Berita</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid veniam corporis iusto, repudiandae a officia. Sapiente quasi voluptatum at.
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/'>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                      <Link href='/'>
                    <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1574593983732-7b11df8b46c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcGVuaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  </Link>
                    <h6 className="pt-8"><a href="/" className="text-lg font-semibold">Judul Berita</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid veniam corporis iusto, repudiandae a officia. Sapiente quasi voluptatum at.
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/berita/berita4'>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                      <Link href='/berita/berita4'>
                    <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://fkip.unpak.ac.id//images/artikel/webinar-ipa1.jpg"
                  />
                  </Link>
                    <h6 className="pt-8"><a href="/" className="text-lg font-semibold">  Webinar Implementasi Kurikulum Prototype Dalam Pembelajaran IPA</a></h6>
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/'>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                      <Link href='/'>
                    <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1574593983732-7b11df8b46c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcGVuaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  </Link>
                    <h6 className="pt-8"><a href="/" className="text-lg font-semibold">Judul Berita</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid veniam corporis iusto, repudiandae a officia. Sapiente quasi voluptatum at.
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/'>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                      <Link href='/'>
                    <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1574593983732-7b11df8b46c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFwcGVuaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  </Link>
                    <h6 className="pt-8"><a href="/" className="text-lg font-semibold">Judul Berita</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid veniam corporis iusto, repudiandae a officia. Sapiente quasi voluptatum at.
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              
              
              
              
            </div>

            
          </div>
        </section>


        

        
        
      </main>
      <Footer />
    </>
  );
}
