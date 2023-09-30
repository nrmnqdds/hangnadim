import Image from "next/image";
import NADIMLOGO from "@/public/nadimlogo.png";
import LPH from "@/public/layered-peaks-haikei.svg";
import { RevealList } from "next-reveal";

const Song = () => {
  return (
    <>
      <section
        id="song"
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-orange-700 px-5"
      >
        <Image
          src={NADIMLOGO}
          alt=""
          fill
          className="absolute pointer-events-none opacity-5 object-contain"
        />
        <h1 className="text-5xl text-slate-100 drop-shadow-lg mb-10">
          LAGU <span className="text-orange-100">HANG NADIM</span>
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="right"
          className="flex flex-col justify-center text-center text-orange-100 tracking-wider invisible"
        >
          <p>nadimku helangku, tangkas berani,</p>
          <p>nadimku helangku, gagah pekerti,</p>
          <p>helangku terbang tingi, nadimku semat dihati</p>
          <br />
          <p>kibarkan sayapmu seluasnya,</p>
          <p>agar kita menggapainya,</p>
          <p>matlamat yang kita bina bersama,</p>
          <p>sasaranku musuh durjana</p>
          <br />
          <p>nadimku helangku, ayuhlah bersatu,</p>
          <p>memburu impian yang satu,</p>
          <p>pantang mengalah, pantang mengundur,</p>
          <p>itulah nadimku yang satu</p>
          <br />
          <p>nadimku helangku jiwaku,</p>
          <p>hu! ha!</p>
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen" />
    </>
  );
};

export default Song;
