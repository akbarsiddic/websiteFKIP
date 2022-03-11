import React from "react";
import Link from "next/link";
import Youtube from "../components/Player/Youtube";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

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
                    Fakultas Keguruan dan Ilmu Pendidikan
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vero corporis eaque cum tempore eos id harum, ullam nihil ad quibusdam et totam vitae. Reiciendis nostrum fugiat ab iure facilis.
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
              <Link href="https://www.unpak.ac.id/perkuliahan/pengumuman/kalender-akademik-jadwal-simak" passHref={true}>
              
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
                    </div>
                    <h6><a href="https://www.unpak.ac.id/perkuliahan/pengumuman/kalender-akademik-jadwal-simak" passHref={true} className="text-lg font-semibold">Jadwal Simak</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Kalender Akademik & Jadwal SIMAK
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="https://www.unpak.ac.id/perkuliahan/pengumuman/her-registrasi-perkuliahan" passHref={true}>
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
</svg>
                    </div>
                    <h6> <a href="https://www.unpak.ac.id/perkuliahan/pengumuman/her-registrasi-perkuliahan" passHref={true} className="text-lg font-semibold">HER-Registrasi</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Her-Registrasi Perkuliahan Mahasiswa
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="https://www.unpak.ac.id/perkuliahan/pengumuman/perbaikan-identitas-simak" passHref={true}>
              <div className="cursor-pointer lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
</svg>
                    </div>
                    <h6><a href="https://www.unpak.ac.id/perkuliahan/pengumuman/perbaikan-identitas-simak" passHref={true} className="cursor-pointer text-lg font-semibold">Identitas Simak</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Perbaikan Identitas Forlap Dikti
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <Link href="https://www.unpak.ac.id/info-pendaftaran-pmb-unpak" passHref={true}>
              <div className="cursor-pointer pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
</svg>
                    </div>
                    <h6><a href="https://www.unpak.ac.id/info-pendaftaran-pmb-unpak" passHref={true} className="text-lg font-semibold">Biaya Kuliah</a></h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Unduh Brosur Universitas Pakuan
                    </p>
                  </div>
                </div>
              </div>
              </Link>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                 Tentang Kami
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, minima.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium, consequatur distinctio cumque voluptatem doloribus quasi sunt incidunt iusto. Esse optio repudiandae distinctio nulla? Qui repellendus atque sapiente modi quasi, libero dolore officiis impedit totam explicabo labore est eos quia.
                </p>
                <Link   href="https://fkip.unpak.ac.id/tentang-kami" passHref={true}>
                  <a href="/" target='_blank' className="cursor-pointer font-bold text-blueGray-700 mt-8">
                   Baca Selengkapnya!
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://fkip.unpak.ac.id//images/dekan-fkip2.png "
                    className="w-full align-middle rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Calon Mahasiswa!</h3>
                  <div>
                          <h4 className="text-blueGray-500">
                            Ayo Daftar Sekarang
                          </h4>
                        </div>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Penerimaan Mahasiswa Baru (PMB Online) Fakultas Keguruan dan Ilmu Pendidikan Universitas Pakuan.


                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <button className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         <Link href="https://pmb.unpak.ac.id/"  passHref={true}>
                          <a href="/" target='_blank'>
                            Daftar Sekarang! 
                          </a>
                         </Link> 
                      </button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Kabar Terbaru</h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                 <Link href="./berita">
                  <img
                    alt="..."
                    src="https://fkip.unpak.ac.id/images/artikel/kearifan2.jpg"
                    className="cursor-pointer shadow-lg rounded-lg mx-auto max-w-120-px"
                    />
                  </Link>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold"><Link href="./berita/berita1">Kearifan Lokal Masyarakat Kampung Sindang Barang</Link></h5>
                    <p className="mt-1 text-xs text-blueGray-400 uppercase font-semibold">
                      10 Maret 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Link href="./berita">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="cursor-pointer shadow-lg rounded-lg mx-auto max-w-120-px"
                    />
                  </Link>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold"><Link href="./berita">Judul Berita</Link></h5>
                    <p className="mt-1 text-xs text-blueGray-400 uppercase font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta adipisci doloremque dolore explicabo nihil eveniet libero commodi fugiat velit impedit atque reiciendis, natus, animi, alias aliquid dolorem quas facere!
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Link href="./berita">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="cursor-pointer shadow-lg rounded-lg mx-auto max-w-120-px"
                    />
                  </Link>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold"><Link href="./berita">Judul Berita</Link></h5>
                    <p className="mt-1 text-xs text-blueGray-400 uppercase font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta adipisci doloremque dolore explicabo nihil eveniet libero commodi fugiat velit impedit atque reiciendis, natus, animi, alias aliquid dolorem quas facere!
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Link href="./berita">
                  <img
                    alt="..."
                    src="https://fkip.unpak.ac.id//images/artikel/webinar-ipa1.jpg"
                    className="cursor-pointer shadow-lg rounded-lg mx-auto max-w-120-px"
                    />
                  </Link>
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold"><Link href="./berita/berita4">Webinar Implementasi Kurikulum Prototype Dalam Pembelajaran IPA</Link></h5>
                    <p className="mt-1 text-xs text-blueGray-400 uppercase font-semibold">
                      10 Maret 2022
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mt-10">
                <button className="text-lightBlue-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  <Link href='./berita'>
                    Lihat Semua
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Our Social Media
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <Link href="https://wa.me/628551111980?text=Live%20Chat%20Whatsapp%20Universitas%20Pakuan" passHref={true}>
              <div className="cursor-pointer py-8 w-full lg:w-3/12 px-4 text-center">
                <div className="cursor-pointer text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 30 30"
styles=" fill:#000000;">    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
</svg>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  08551111980
                </h6>
              </div>
              </Link>
              <Link href="https://www.facebook.com/unpak" passHref={true}>
              <div className="cursor-pointer py-8 w-full lg:w-3/12 px-4 text-center">
                <div className="cursor-pointer text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 30 30"
styles=" fill:#000000;">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Universitas Pakuan
                </h6>
              </div>
              </Link>
              <Link href="https://www.youtube.com/channel/UCYXuJVgSbEUrDSwQMb7zamQ"  passHref={true}>
              <div className="cursor-pointer py-8 w-full lg:w-3/12 px-4 text-center">
                <div className="cursor-pointer text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 50 50"
styles=" fill:#000000;"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
</svg>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">  
                  Unpak TV
                </h6>
              </div>
              </Link>
              <Link href="https://www.instagram.com/official_unpak" passHref={true}>
              <div className="cursor-pointer py-10 w-full lg:w-3/12 px-4 text-center">
                <div className="cursor-pointer text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 30 30"
styles=" fill:#000000;">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
</svg>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  @official_unpak
                </h6>
              </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-8 lg:p-12">
                    <h4 className="text-2xl text-center font-semibold">
                      Video Profil
                    </h4>
                    <div className="relative overflow-hidden w-full m-10">
                     <Youtube/>
                    </div>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
