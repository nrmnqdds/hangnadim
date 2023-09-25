import localFont from "next/font/local";

const warGate = localFont({ src: "../../public/Wargate-Normal.otf" });

const HomeScreen = () => {
  return (
    <section className="isolate w-full h-screen flex items-center justify-center">
      <div className="fixed text-center">
        <h1
          className={`text-8xl text-slate-100 drop-shadow-glow ${warGate.className}`}
        >
          HANG NADIM
        </h1>
        <p
          className={`text-5xl text-gray-500 drop-shadow-xl ${warGate.className}`}
        >
          TANGKAS BERANI
        </p>
      </div>
    </section>
  );
};

export default HomeScreen;
