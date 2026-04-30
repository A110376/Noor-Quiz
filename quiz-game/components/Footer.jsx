"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-white/10 bg-black/20 backdrop-blur">

      <div className="max-w-5xl mx-auto px-4 py-5 text-center text-xs sm:text-sm text-gray-500">

        © {new Date().getFullYear()}{" "}
        <span className="text-white">Noor Quiz</span>. All rights reserved.

      </div>

    </footer>
  );
}