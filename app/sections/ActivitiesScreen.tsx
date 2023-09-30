"use client";

import LPH from "@/public/layered-peaks-haikei.svg";
import Image from "next/image";
import { RevealList } from "next-reveal";
import IMG1 from "@/public/photo_2023-09-25_20-24-22.jpg";
import IMG2 from "@/public/photo_2023-09-25_20-27-09.jpg";
import IMG3 from "@/public/photo_2023-10-01_00-44-32.jpg";
import IMG4 from "@/public/photo_2023-10-01_00-44-36.jpg";
import IMG5 from "@/public/photo_2023-10-01_01-02-33.jpg";
import IMG6 from "@/public/photo_2023-10-01_00-44-45.jpg";
import IMG7 from "@/public/IMG_6388.jpeg";

const images = [
  {
    src: IMG1,
    alt: "image1",
  },
  {
    src: IMG2,
    alt: "image2",
  },
  {
    src: IMG3,
    alt: "image3",
  },
  {
    src: IMG4,
    alt: "image4",
  },
  {
    src: IMG5,
    alt: "image5",
  },
  {
    src: IMG6,
    alt: "image6",
  },
  {
    src: IMG7,
    alt: "image7",
  },
];

const Activities = () => {
  return (
    <>
      <section
        id="activities"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-orange-700 px-5"
      >
        <h1 className="text-5xl text-slate-100 drop-shadow-lg mb-10">
          Activities
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="bottom"
          className="flex flex-row flex-wrap gap-2 items-center justify-center"
        >
          {images.map((batch, index) => (
            <div
              key={index}
              className="flex items-center w-64 h-48 justify-center rounded-lg drop-shadow-lg border-2 border-solid border-orange-900 relative"
            >
              <Image
                src={batch.src}
                alt=""
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          ))}
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen" />
    </>
  );
};

export default Activities;
