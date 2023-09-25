import localFont from "next/font/local";
import { RevealList } from "next-reveal";

const warGate = localFont({ src: "../../public/Wargate-Normal.otf" });

const HomeScreen = () => {
  return (
    <section className="isolate w-full h-screen flex items-center justify-center">
      <RevealList
        interval={200}
        delay={200}
        easing="ease-in-out"
        origin="bottom"
        className="fixed text-center invisible"
      >
        <h1 className="text-5xl md:text-8xl text-slate-100 drop-shadow-glow">
          HANG NADIM
        </h1>
        <p className="text-2xl md:text-5xl text-gray-500 drop-shadow-xl">
          TANGKAS BERANI
        </p>
      </RevealList>
    </section>
  );
};

export default HomeScreen;
