import Image from "next/image";
import NADIMLOGO from "../../public/nadimlogo.png";
import { RevealList } from "next-reveal";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-orange-700 px-5"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white drop-shadow-lg">
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
            <p className="text-orange-300">
              Having or showing fine personal qualities or high moral principals
            </p>
          </div>

          <div className="-space-y-1">
            <p className="text-orange-200 drop-shadow-lg">
              <span className="text-3xl text-orange-100">A</span>rdent
            </p>
            <p className="text-orange-300">Synonym: Passionate</p>
          </div>

          <div className="-space-y-1">
            <p className="text-orange-200 drop-shadow-lg">
              <span className="text-3xl text-orange-100">D</span>ecisive
            </p>
            <p className="text-orange-300">Ability to make decisions quickly</p>
          </div>
          <div className="-space-y-1">
            <p className="text-orange-200 drop-shadow-lg">
              <span className="text-3xl text-orange-100">I</span>ntelligent
            </p>
            <p className="text-orange-300">
              Able to apply knowledge and skills
            </p>
          </div>
          <div className="-space-y-1">
            <p className="text-orange-200 drop-shadow-lg">
              <span className="text-3xl text-orange-100">M</span>anner
            </p>
            <p className="text-orange-300">
              A person&apos;s outward bearing or way of behaving towards others
              or manners maketh man
            </p>
          </div>
        </RevealList>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image src={NADIMLOGO} alt="" height={100} width={100} />
      </div>
    </section>
  );
};

export default About;
