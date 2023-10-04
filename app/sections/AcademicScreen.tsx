"use client";

import LPH from "@/public/layered-peaks-haikei.svg";
import Image from "next/image";
import { RevealList } from "next-reveal";

const Academic = () => {
    return (
      <>
        <section
          id="academic"
          className="w-full min-h-screen flex flex-col items-center justify-center bg-orange-700 px-5"
        >
          <h1 className="text-5xl text-slate-100 drop-shadow-lg mb-10">
            academic
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
  }
  export default Academic;