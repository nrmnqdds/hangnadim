"use client";

import { useRef } from "react";
import LPH from "@/public/layered-peaks-haikei.svg";
import Image from "next/image";
import { RevealList } from "next-reveal";
import BATCH2014 from "@/public/batch2014.jpg";
import BATCH2015 from "@/public/batch2015.jpg";
import BATCH2016 from "@/public/batch2016.jpg";
import BATCH2017 from "@/public/batch2017.jpg";
import BATCH2018 from "@/public/batch2018.jpg";
import BATCH2020 from "@/public/batch2020.jpg";
import BATCH2021 from "@/public/batch2021.jpg";

const batches = [
  {
    src: BATCH2014,
    text: "Batch 2014",
  },
  {
    src: BATCH2015,
    text: "Batch 2015",
  },
  {
    src: BATCH2016,
    text: "Batch 2016",
  },
  {
    src: BATCH2017,
    text: "Batch 2017",
  },
  {
    src: BATCH2018,
    text: "Batch 2018",
  },
  {
    src: BATCH2020,
    text: "Batch 2020",
  },
  {
    src: BATCH2021,
    text: "Batch 2021",
  },
];

const Gallery = () => {
  return (
    <>
      <section
        id="gallery"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-orange-700 px-5"
      >
        <h1 className="text-5xl text-slate-100 drop-shadow-lg mb-10">
          Gallery
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="bottom"
          className="flex flex-row flex-wrap gap-2 items-center justify-center"
        >
          {batches.map((batch, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg drop-shadow-lg border-2 border-solid border-orange-900 relative"
            >
              <Image
                src={batch.src}
                alt=""
                className="object-fit relative rounded-lg"
              />
              <div className="absolute bottom-5 bg-slate-100 py-1 px-2 rounded-lg flex items-center justify-center drop-shadow-lg ">
                <p className="text-3xl text-orange-600">{batch.text}</p>
              </div>
            </div>
          ))}
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen" />
    </>
  );
};

export default Gallery;
