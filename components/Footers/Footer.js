import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Hubungi Kami</h4>
              <div className="mt-6 lg:mb-0 mb-6">
                <p className="font-bold text-xl ">Alamat :</p>
                <p>Jl. Pakuan, Tegallega. Kecamatan Bogor Tengah, Kota Bogor. Jawa Barat 16143. INDONESIA.</p>
                
                <p className="font-bold text-xl ">Phone :</p>
                <p> 0251 - 8375 608</p>
                
                <p className="font-bold text-xl ">Email :</p>
                <p>fkip@unpak.ac.id</p>
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Eksternal Link
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://ristekdikti.go.id/"
                      >
                        DIKTI
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="http://sinta.ristekbrin.go.id/affiliations/detail?id=1394&view=overview"
                      >
                        Sinta DIKTI
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.lldikti4.or.id/"
                      >
                        LLDikti Wilayah IV
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.instagram.com/p/BxSBfTqAGEv/?utm_source=ig_share_sheet&igshid=1355v6kzj7f3o"
                      >
                        Beasiswa PPA Ditjen Belmawa
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.banpt.or.id/"
                      >
                        Badan Akreditasi Nasional -PT
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 pt-8">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Internal Link
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://journal.unpak.ac.id/"
                      >
                        Journal Online
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://pmb.unpak.ac.id/"
                      >
                        PMB Online
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.unpak.ac.id/layanan/lowongan-kerja-unpak"
                      >
                        Karier Unpak
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://lib.unpak.ac.id/"
                      >
                        Perpustakaan
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://io.unpak.ac.id/"
                      >
                        International Office
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Akbar Siddiq
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
