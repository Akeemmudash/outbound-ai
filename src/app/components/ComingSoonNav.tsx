"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-silver-light fixed w-full py-5 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="logo block">
          <Image
            src="/dark-logo.svg"
            width={141}
            height={36}
            alt="Outbound logo"
          />
        </Link>

        <div>
          <Link
            href="/coming-soon"
            className="hover:text-steel px-4 font-semibold transition duration-150 active:scale-95"
          >
            About
          </Link>
          <Link
            href="/coming-soon"
            className="hover:text-steel px-4 font-semibold transition duration-150 active:scale-95"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
