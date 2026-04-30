"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full h-16 bg-black/40 backdrop-blur border-b border-white/10">

      <div className="flex items-center justify-between h-full px-4 sm:px-6">

        {/* Logo */}
        <Image
          src="/logo.png"
          width={120}
          height={40}
          alt="logo"
          className="w-24 sm:w-28 h-auto"
          priority
        />

        {/* Links */}
        <div className="flex gap-4 sm:gap-6 text-sm">
          <Link href="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-400 transition">
            About
          </Link>
        </div>

      </div>
    </div>
  );
}