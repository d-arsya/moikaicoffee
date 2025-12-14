"use client";

import { useState } from "react";
import Image from "next/image";
import LogoMoikai from "../../public/logo-square.jpg";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="mx-auto flex items-center justify-between md:pr-12">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={LogoMoikai}
            alt="Logo Moikai Coffee"
            className="w-16 md:w-20"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-gray-600">
            About
          </a>
          <a href="#menu" className="hover:text-gray-600">
            Menu
          </a>
          <a href="#promo" className="hover:text-gray-600">
            Promo
          </a>
          <a href="#locations" className="hover:text-gray-600">
            Locations
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1 items-end w-max flex flex-col">
            <span className="block w-3 h-[2px] bg-primary" />
            <span className="block w-6 h-[2px] bg-primary" />
            <span className="block w-3 h-[2px] bg-primary" />
          </div>
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="md:hidden fixed top-16 left-0 w-full px-4 pb-4 space-y-2 text-sm font-medium">
          <a href="#about" className="block py-2 border-b">
            About
          </a>
          <a href="#menu" className="block py-2 border-b">
            Menu
          </a>
          <a href="#promo" className="block py-2 border-b">
            Promo
          </a>
          <a href="#locations" className="block py-2 border-b">
            Locations
          </a>
          <a href="#contact" className="block py-2">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
