import { useState, useEffect } from "react";
import { RevealList } from "next-reveal";

const HomeScreen = () => {
  const [blur, handleBlur] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);
  return (
    <section className="isolate w-full h-screen flex items-center justify-center">
      {blur ? null : (
        <RevealList
          interval={200}
          delay={200}
          easing="linear"
          origin="bottom"
          className="fixed text-center invisible"
        >
          <h1 className="text-5xl md:text-8xl text-slate-100 drop-shadow-glow">
            HANG NADIM
          </h1>
          <p className="text-2xl md:text-5xl text-orange-500 drop-shadow-xl">
            TANGKAS BERANI
          </p>
        </RevealList>
      )}
    </section>
  );
};

export default HomeScreen;
