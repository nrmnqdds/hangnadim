import Image from "next/image";
import NADIMLOGO from "../../public/nadimlogo.png";
import LPH from "../../public/layered-peaks-haikei.svg";
import { RevealList } from "next-reveal";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-orange-700 px-5"
      >
        <Image
          src={NADIMLOGO}
          alt=""
          fill
          className="absolute pointer-events-none opacity-5 object-contain"
        />

        <div className="flex-1 flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl text-white drop-shadow-lg mb-3 text-center">
            MAKSUD <span className="text-orange-100">NADIM</span>
          </h1>
          <RevealList
            reset={true}
            easing="ease-in-out"
            delay={100}
            interval={100}
            origin="bottom"
            className="text-left space-y-2 drop-shadow-lg"
          >
            <div className="-space-y-1">
              <p className="text-orange-200 drop-shadow-lg">
                <span className="text-3xl text-orange-100">N</span>oble
              </p>
              <p className="text-orange-300 leading-none">
                Having or showing fine personal qualities or high moral
                principals
              </p>
            </div>

            <div className="-space-y-1">
              <p className="text-orange-200 drop-shadow-lg">
                <span className="text-3xl text-orange-100">A</span>rdent
              </p>
              <p className="text-orange-300 leading-none">
                Synonym: Passionate
              </p>
            </div>

            <div className="-space-y-1">
              <p className="text-orange-200 drop-shadow-lg">
                <span className="text-3xl text-orange-100">D</span>ecisive
              </p>
              <p className="text-orange-300 leading-none">
                Ability to make decisions quickly
              </p>
            </div>

            <div className="-space-y-1">
              <p className="text-orange-200 drop-shadow-lg">
                <span className="text-3xl text-orange-100">I</span>ntelligent
              </p>
              <p className="text-orange-300 leading-none">
                Able to apply knowledge and skills
              </p>
            </div>

            <div className="-space-y-1">
              <p className="text-orange-200 drop-shadow-lg">
                <span className="text-3xl text-orange-100">M</span>anner
              </p>
              <p className="text-orange-300 leading-none">
                A person&apos;s outward bearing or way of behaving towards
                others or manners maketh man
              </p>
            </div>
          </RevealList>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl text-white drop-shadow-lg mb-3 text-center">
            MAKSUD <span className="text-orange-100">TANGKAS BERANI</span>
          </h1>
          <RevealList
            reset={true}
            easing="ease-in-out"
            delay={100}
            interval={100}
            origin="bottom"
            className="text-left space-y-2 drop-shadow-lg invisible"
          >
            <div>
              <p className="text-orange-100 drop-shadow-lg text-3xl">TANGKAS</p>
              <p className="text-orange-300 leading-none">
                Mencerminkan kecepatan pegawai kadet nadim dalam melaksanakan
                tugasan dan arahan yang diberikan
              </p>
            </div>

            <div>
              <p className="text-orange-100 drop-shadow-lg text-3xl">BERANI</p>
              <p className="text-orange-300 leading-none">
                Melambangkan kesanggupan pegawai kadet dalam mengharungi segala
                ujian dan cabaran dalam melahirkan seorang pegawai tentera yang
                berkarisma
              </p>
            </div>

            <div>
              <p className="text-orange-100 drop-shadow-lg text-3xl">
                TANGKAS BERANI
              </p>
              <p className="text-orange-300 leading-none">
                Merupakan identiti yang melambangkan kompeni Nadim merupakan
                sebuah kompeni yang mampu bersains dalam apa jua keadaan untuk
                berdiri setaraf dengan kompeni lain
              </p>
            </div>
          </RevealList>
        </div>
      </section>
      <Image src={LPH} alt="" className="w-screen" />
    </>
  );
};

export default About;
