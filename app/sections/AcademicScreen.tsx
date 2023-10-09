"use client";

import LPH from "@/public/layered-peaks-haikei.svg";
import Image from "next/image";
import { RevealList } from "next-reveal";

const links = [
  {
    name: "AKP",
    link: "https://drive.google.com/drive/folders/1F7UHPO6iZRkY5rMRYN_dtkKVSFuJvYMJ?usp=drive_link",
  },
  {
    name: "Perubatan",
    link: "https://drive.google.com/drive/folders/1EICRJ9DxD-73HUJ9Q9sf2Se3KODXBtLc?usp=drive_link",
  },
  {
    name: "FKJ",
    link: "https://drive.google.com/drive/folders/1ioijKwpUWNh-ICF1eKrFCVWbWZoEtKmO?usp=drive_link",
  },
  {
    name: "FPPP",
    link: "https://drive.google.com/drive/folders/1nH3bLw8lD0Ol4_m2sysLTDH26r8w0Uf-?usp=drive_link",
  },
  {
    name: "FSTP",
    link: "https://drive.google.com/drive/folders/1uwmFYzb8ZNl4ElaHmyP2lw3vk3pZtzaV?usp=drive_link",
  },
];

const Academic = () => {
  return (
    <>
      <section
        id="academic"
        className="w-full h-fit py-14 flex flex-col items-center justify-center bg-orange-700 px-5"
      >
        <h1 className="text-5xl text-slate-100 drop-shadow-lg mb-10">
          Academic
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="bottom"
          className="flex flex-row flex-wrap gap-2 items-center justify-center"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-slate-100 hover:text-slate-50 bg-orange-800 hover:bg-orange-900 p-5 rounded-lg"
            >
              {link.name}
            </a>
          ))}
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen" />
    </>
  );
};

export default Academic;
