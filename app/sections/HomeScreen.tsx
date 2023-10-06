import { useState, useEffect } from "react";
import { RevealList } from "next-reveal";
import { useGlitch } from "react-powerglitch";

const HomeScreen = () => {
  const [blur, handleBlur] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);
  const glitch = useGlitch();
  return (
    <section className="isolate w-full h-screen flex items-center justify-center">
      {blur ? null : (
        <RevealList
          interval={200}
          delay={200}
          easing="ease-in-out"
          origin="bottom"
          className="fixed text-center invisible"
        >
          <h1 className="text-5xl md:text-8xl text-slate-100 drop-shadow-glow">
            <span ref={glitch.ref}>HANG NADIM</span>
          </h1>
          <p
            className="text-2xl md:text-5xl text-orange-500 drop-shadow-glow"
            ref={glitch.ref}
          >
            <span ref={glitch.ref}>TANGKAS BERANI</span>
          </p>
        </RevealList>
      )}
    </section>
  );
};

export default HomeScreen;
