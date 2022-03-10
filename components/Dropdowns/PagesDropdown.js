import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Menu
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Akademik
        </span>
        <Link href="https://fkip.unpak.ac.id/akademik/struktur-organisasi" passHref={true}>
          <a
           href="/"
           target='_blank'
            className={
              "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Struktur Organisasi
          </a>
        </Link>
        <Link href="https://fkip.unpak.ac.id/akademik/program-pendidikan" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Program Pendidikan
          </a>
        </Link>
        <Link href="https://fkip.unpak.ac.id/akademik/bimbingan-akademik-dan-perkuliahan" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Bimbingan Akademik & Perkuliahan
          </a>
        </Link>
        <Link href="https://fkip.unpak.ac.id/akademik/unit-kerja" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Unit Kerja
          </a>
        </Link>
        <Link href="https://fkip.unpak.ac.id/akademik/laboratorium" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Laboratorium
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Program Studi
        </span>
        <Link href="http://pbindo-fkip.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Bahasa & Sastra Indonesia

          </a>
        </Link>
        <Link href="http://englishedu-fkip.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            
Bahasa Inggris

          </a>
        </Link>
        <Link href="https://biologi-fkip.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            
Pendidikan Biologi

          </a>
        </Link>
        <Link href="http://pgsd-fkip.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            
PGSD

          </a>
        </Link>
        <Link href="https://ipa-fkip.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            
Pendidikan IPA

          </a>
        </Link>
        <Link href="http://ppg-fkip.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target="_blank"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
         
Program Profesi Guru
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Kemahasiswaan
        </span>
        <Link href="https://www.unpak.ac.id/perkuliahan/kemahasiswaan/informasi-fakultas" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Informasi Fakultas
          </a>
        </Link>
        <Link href="https://www.unpak.ac.id/perkuliahan/kemahasiswaan/prestasi-mahasiswa" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Prestasi Mahasiswa
          </a>
        </Link>
        <Link href="https://jom.unpak.ac.id/" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Karya Ilmiah Mahasiswa
          </a>
        </Link>
        <Link href="https://www.unpak.ac.id/unduh/PRESTASI_KOKURIKULER_DAN_EKSTRAKURIKULER_MAHASISWA_UNIVERSITAS_PAKUAN.docx" passHref={true}>
          <a
            href="#pablo"
            target='_blank'
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Form Prestasi Mahasiswa 
          </a>
        </Link>
        <Link href="/" >
          <a
            href="#pablo"
            target='_blank'
            className={
              "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Unit Kerja Mahasiswa
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "cursor-pointer text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Lainnya
        </span>
        <Link href="http://siafkip.fkip.unpak.ac.id/" passHref={true}>
          <a
          href="/"
          target='_blank'
            className={
              "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
           Direct SIA FKIP
          </a>
        </Link>
        <Link href="https://lib-fkip.unpak.ac.id/" passHref={true}>
          <a
          href="/"
          target='_blank'
            className={
              "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
           Perpustakaan
          </a>
        </Link>
      </div>
    </>
  );
};

export default PagesDropdown;
