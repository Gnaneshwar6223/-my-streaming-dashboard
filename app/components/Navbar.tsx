"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-wide text-white">
          Stream<span className="font-light text-gray-300">Clone</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-sm">
          <li><Link className="hover:text-white transition" href="/">Home</Link></li>
          <li><Link className="hover:text-white transition" href="/movies">Movies</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </nav>
    </header>
  );
}
