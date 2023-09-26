import { RevealList } from "next-reveal";
import Image from "next/image";
import NADIMLOGO from "../../public/nadimlogo.png";
import LPH from "../../public/layered-peaks-haikei2.svg";

const Values = () => {
  return (
    <>
      <section
        id="values"
        className="relative bg-orange-700 min-h-screen flex flex-col items-center justify-center px-5"
      >
        <Image
          src={NADIMLOGO}
          alt=""
          fill
          className="absolute pointer-events-none opacity-5 object-contain"
        />
        <h1 className="text-slate-100 drop-shadow-lg text-5xl mb-5">
          MILITARY VALUES
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="bottom"
          className="flex flex-row flex-wrap items-baseline justify-center gap-5 invisible"
        >
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-lg flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">DUTY</h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Fulfill your obligations. Doing your duty means more than carrying
              out your assigned tasks. Duty means being able to accomplish tasks
              as part of a team. You fulfill your obligations as a part of your
              unit every time you resist the temptation to take {"shortcuts"}{" "}
              that might undermine the integrity of the final product
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">LOYALTY</h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Bear true faith and allegiance to the Malaysia Constitution. A
              loyal Soldier is one who supports the leadership and stands up for
              fellow Soldiers. By wearing the uniform of the MALAYSIA Armed
              Forces you are expressing your loyalty. And by doing your share,
              you show your loyalty to your unit
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">
              SELFLESS SERVICE
            </h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Put the welfare of the nation, the Army and your subordinates
              before your own. Selfless service is larger than just one person.
              In serving your country, you are doing your duty loyally without
              thought of recognition or gain. The basic building block of
              selfless service is the commitment of each team member to go a
              little further, endure a little longer, and look a little closer
              to see how he or she can add to the effort
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">RESPECT</h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Treat people as they should be treated. In the Soldier&apos;s
              Code, we pledge to “treat others with dignity and respect while
              expecting others to do the same.” Respect is what allows us to
              appreciate the best in other people. Respect is trusting that all
              people have done their jobs and fulfilled their duty. And
              self-respect is a vital ingredient with the Army value of respect,
              which results from knowing you have put forth your best effort.
              The Army is one team and each of us has something to contribute
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">
              INTEGRITY
            </h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Do what is right, legally and morally. Integrity is a quality you
              develop by adhering to moral principles. It requires that you do
              and say nothing that deceives others. As your integrity grows, so
              does the trust others place in you. The more choices you make
              based on integrity, the more this highly prized value will affect
              your relationships with family and friends, and, finally, the
              fundamental acceptance of yourself
            </p>
          </div>
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen rotate-180" />
    </>
  );
};

export default Values;
