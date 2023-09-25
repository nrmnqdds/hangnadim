"use client";

import Image from "next/image";
import NADIMLOGO from "../public/nadimlogo.png";
import { useState, useEffect } from "react";
import Link from "next/link";

const navigation = [
  { name: "About", href: "#about" },
  { name: "i-Rewards", href: "#prize-pool" },
  { name: "Timeline", href: "#timeline" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [blur, handleBlur] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);

  return (
    <nav
      className={`w-full fixed z-20 flex items-center justify-between py-2 px-10 ${
        blur && "backdrop-blur"
      }`}
    >
      <Image
        src={NADIMLOGO}
        alt=""
        height={40}
        width={40}
        className="object-contain"
      />

      {/* <p className="text-white">test</p> */}
      <div>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white font-bold text-lg mx-4 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.href.slice(1)); // Assuming item.href is a hash link (#example)
              if (element) {
                element.scrollIntoView({ behavior: "smooth" }); // You can customize scroll behavior here
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
