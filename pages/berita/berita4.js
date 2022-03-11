import React from "react";
import Link from "next/link";


// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/FooterSmall.js";


export default function Landing() {
  return (
    <>
      <Navbar transparent />
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://fkip.unpak.ac.id//images/artikel/webinar-ipa1.jpg')",
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
                   Webinar Implementasi Kurikulum Prototype Dalam Pembelajaran IPA
                  </h1>
                  
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
                  src="https://fkip.unpak.ac.id/images/artikel/webinar-ipa3.jpg"
                />
              </div>
              <div className="flex ">
                <div className="md:pr-12">
                  
                    <h3 className="text-3xl font-semibold">Webinar Implementasi Kurikulum Prototype Dalam Pembelajaran IPA</h3>
                    
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                       Kurikulum paradigma baru atau populer disebut Kurikulum Prototipe 2022 sebenarnya revisi dari Kurikulum 2013 dan diberikan sebagai opsi tambahan bagi satuan pendidikan untuk melakukan pemulihan pembelajaran selama 2022-2024 sebagai akibat dari pandemi Covid-19 yang telah menyebabkan kemunduran proses akademik, pengetahuan, dan keterampilan, baik itu secara umum maupun spesifik (learning loss).
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                      Penerapannya di sekolah belum berlangsung sepenuhnya, karena pemerintah baru selesai mengevaluasi pelaksanaan di sekolah penggerak, untuk kemudian nanti secara bertahap sekolah yang lain dapat ikut mengimplementasikannya.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                        Maka karena itu Program Studi IPA FKIP Universitas Pakuan mengadakan Webinar dengan tema Implementasi Kurikulum Prototype dalam pembelajaran IPA dengan maksud membantu pemerintah dalam mensosialisasikan kurikulum ini.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                        Kegiatan ini menghadirkan narasumber yaitu Dr. Eni Nuraeni, M.Pd, yang telah aral melintang berkecimpung dalam proses pembelajaran sains.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                        Kegiatan webinar ini diikuti oleh 510 pendaftar dari berbagai wilayah di Indonesia mulai dari barat hingga timur, bahkan terdapat beberapa peserta dari negara tetangga yaitu Timor Leste.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                        Hal ini menunjukkan bahwa pengetahuan akan kurikulum ini sangat diperlukan oleh peserta dari berbagai daerah. Nastaji salah satu peserta mengungkapkan kegiatan webinar ini memberikan pengalaman dan wawasan yang berharga bagi tehnis pelaksanaan pembelajaran sains di sekolah.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                        Alternatif-alternatif yang diberikan narasumber sangat aplikatif, sehingga menginspirasi untuk penerapkannya di sekolah.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                        Selanjutnya kegiatan serupa diharapkan dapat diselenggarakan kembali untuk memperkuat pengetahuan dan pengalaman guru mengenai kurikulum ini.
                  </p>
                 
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <button className="text-lightBlue-500 bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                         <Link href="../berita">
                         Lihat Berita Lain 
                         </Link> 
                      </button>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </>
  );
}
