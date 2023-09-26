import Image from "next/image";
import NADIMLOGO from "../../public/nadimlogo.png";
import ALKLOGO from "../../public/alklogo.png";

const Footer = () => {
  return (
    <footer className="bg-orange-700 p-10 pb-5 flex items-center justify-between">
      <Image
        src={NADIMLOGO}
        alt=""
        width={40}
        height={40}
        className="object-contain drop-shadow-lg"
      />
      <p className="text-orange-100 tracking-widest">
        Copyright 2023 • Kompeni Hang Nadim
      </p>
      <Image
        src={ALKLOGO}
        alt=""
        width={40}
        height={40}
        className="object-contain drop-shadow-lg"
      />
    </footer>
  );
};

export default Footer;
