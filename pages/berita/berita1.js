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
                "url('https://fkip.unpak.ac.id/images/artikel/kearifan2.jpg')",
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
                   Kearifan Lokal Masyarakat Kampung Sindang Barang
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
                  src="https://fkip.unpak.ac.id/images/artikel/kearifan3.jpg"
                />
              </div>
              <div className="flex ">
                <div className="md:pr-12">
                  
                    <h3 className="text-3xl font-semibold">Kearifan Lokal Masyarakat di Kampung Budaya Sindang Barang Bogor</h3>
                    <div>
                          <h4 className="text-blueGray-500">
                            Mahasiswa Pendidikan Bahasa Inggris FKIP Universitas Pakuan Melakukan Studi Kearifan Lokal Masyarakat di Kampung Budaya Sindang Barang Bogor
                          </h4>
                    </div>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    FKIP, UNPAK — Kearifan lokal merupakan sebuah sistem dalam tatanan kehidupan sosial, politik, budaya,ekonomi, serta lingkungan yang hidup di tengah-tengah masyarakat lokal. Ciri yang melekat dalam kearifan lokal adalah sifatnya yang dinamis, berkelanjutan dan dapat diterima oleh komunitasnya.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                   Kearifan lokal merupakan bagian dari masyarakat untuk bertahan hidup sesuai dengan kondisi lingkungan, sesuai dengan kebutuhan, dan kepercayaan yang telah berakar dan sulit untuk dihilangkan.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Kampung Budaya Sindang Barang adalah suatu kampung adat Sunda yang terletak di Desa Pasir Eurih Kecamatan Taman Sari Kabupaten Bogor. Menurut sejarahnya Kampung Sindang Barang sudah ada sejak abad ke XII dan terpapar dalam Babad Pajajaran dan tertulis juga dalam pantun Bogor.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                   Kebudayaan Sunda yang masih kental tercermin dalam perilaku kehidupan masyarakatnya sehari-hari terutama direfleksikan dalam pelaksanaan acara Serentaun yang rutin dilaksanakan di Kampung Sindang Barang.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Kampung Budaya Sindang Barang adalah salah satu komunitas yang hingga kini mempertahankan aspek kebudayaan lokal kerajaan Pajajaran, dimana terdapat 78 lokasi situs sejarah Pakuan Sindangbarang, upacara tradisional (upacara adat Serentaun, upacara adat Neteupken, upacara adat Pabeasan, dan berbagai upacara adat lainnya), dan berbagai kesenian tradisional Sunda.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Salah satu ritual tradisi Sunda yang menjadi ciri khas Kampung Budaya Sindang Barang adalah Serentaun. Serentaun merupakan suatu bentuk penjelmaan rasa syukur warga atas rezeki hasil panen mereka.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Dalam melakukan kajian terhadap kearifan lokal Kampung Budaya Sindangbarang, mahasiswa Program Studi Pendidikan Bahasa Inggris FKIP Universitas Pakuan melaksanakan observasi dan analisis melalui pendekatan SETS pada lingkungan Kampung Budaya Sindangbarang.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Melalui mata kuliah SETS, para mahasiswa secara langsung belajar untuk mendalami kehidupan masyarakat Kampung Budaya Sindangbarang ditinjau dari persepsi sains, lingkungan, teknologi, dan dan masyarakat.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Dengan kata lain, mahasiswa dibawa pada ruang lingkup yang familier atau dekat dengan kehidupan nyata seperti daerah Kampung Budaya Sindangbarang sehingga mereka mampu menguasai dan menguraikan pengetahuan yang sudah dimiliki agar dapat mengatasi permasalahan yang ada di lingkungan sekitar.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-justify text-blueGray-500">
                    Melalui kegiatan ini, mahasiswa mendapatkan wawasan dan pengalaman langsung terkait kearifan lokal masyarakat Kampung Budaya Sindangbarang serta aktivitas budaya dan kaitannya dengan lingkungan, sains, dan teknologi pada Masyarakat Kampung Budaya Sindang Barang.
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
