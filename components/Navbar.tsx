"use client";

import Image from "next/image";
import NADIMLOGO from "../public/nadimlogo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose as XMarkIcon } from "react-icons/ai";
import { FaBars as Bars3Icon } from "react-icons/fa";

const navigation = [
  { name: "About", href: "#about" },
  {
    name: "Values",
    href: "#values",
  },
  {
    name: "Creed",
    href: "#creed",
  },
  {
    name: "Song",
    href: "#song",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Activities",
    href: "#activities",
  },

];

const Navbar = () => {
  const [blur, handleBlur] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);

  return (
    <RevealWrapper
      className={`fixed inset-x-0 top-0 z-50 invisible ${
        blur && "backdrop-blur"
      }`}
      easing="ease-in-out"
      delay={100}
      duration={300}
      origin="top"
    >
      <nav
        className="flex items-center justify-between lg:px-8 h-14 px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="-m-2 p-1.5"
          >
            <span className="sr-only">Nadim Logo</span>
            <Image
              src={NADIMLOGO}
              alt="i-Hax Logo"
              width={40}
              height={40}
              className="object-contain drop-shadow-lg"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-slate-100" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-bold text-lg text-slate-100 tracking-widest mx-4 cursor-pointer hover:text-orange-500"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.href.slice(1)); // Assuming item.href is a hash link (#example)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" }); // You can customize scroll behavior here
                }
              }}
            >
              <div className="hover:bg-secondary  h-14 w-[100px] flex items-center justify-center">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-orange-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-slate-100"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:text-orange-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.href.slice(1)
                      ); // Assuming item.href is a hash link (#example)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" }); // You can customize scroll behavior here
                      }

                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </RevealWrapper>
  );
};

export default Navbar;
