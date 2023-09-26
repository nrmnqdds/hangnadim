import { RevealList } from "next-reveal";
import Image from "next/image";
import LPH from "../../public/layered-peaks-haikei2.svg";

const Creed = () => {
  return (
    <>
      <section
        id="creed"
        className="relative bg-transparent h-fit py-24 flex flex-col items-center justify-center px-5"
      >
        <h1 className="text-slate-100 drop-shadow-glow text-8xl mb-10">
          NADIM&apos;s CREED
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="bottom"
          className="text-white text-3xl drop-shadow-lg text-center"
        >
          <p>
            we are cadet officer of{" "}
            <span className="text-orange-200 drop-shadow-glow">nadim</span>
          </p>
          <p>
            will <span className="text-orange-200 drop-shadow-glow">not</span>{" "}
            tell lies, cheat and steal
          </p>
          <p>
            nor{" "}
            <span className="text-orange-200 drop-shadow-glow">
              double cross
            </span>{" "}
            and
          </p>
          <p>
            will <span className="text-orange-200 drop-shadow-glow">not</span>{" "}
            tolerate among us
          </p>
          <p>
            the individuals who{" "}
            <span className="text-orange-200 drop-shadow-glow">disregard</span>{" "}
            this code
          </p>
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen" />
    </>
  );
};

export default Creed;
