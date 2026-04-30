"use client";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative min-h-screen px-4 py-16 flex flex-col items-center overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-600 blur-[160px] opacity-20 pointer-events-none"></div>

      {/* Hero */}
      <div className="text-center max-w-2xl mb-10 z-10">
        <Image
          src="/main.png"
          width={100}
          height={100}
          alt="logo"
          className="mx-auto mb-4 w-20 sm:w-24"
        />

        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
          About Noor Quiz
        </h1>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          A calm, elegant and meaningful way to learn Islamic knowledge through interactive quizzes.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 z-10">

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            <span className="text-indigo-400 font-medium">Noor Quiz</span> is designed to make learning engaging, peaceful, and rewarding. 
            Whether you're exploring the beautiful names of Allah or learning about the life of Prophet Muhammad ﷺ, 
            this app helps you grow your knowledge in a simple and enjoyable way.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-4">

          <div className="p-4 rounded-xl bg-[#1e293b] border border-[#334155] text-center">
            <p className="text-xl mb-1">📚</p>
            <p className="text-sm text-gray-300">Islamic Learning</p>
          </div>

          <div className="p-4 rounded-xl bg-[#1e293b] border border-[#334155] text-center">
            <p className="text-xl mb-1">🎯</p>
            <p className="text-sm text-gray-300">MCQ Quiz System</p>
          </div>

          <div className="p-4 rounded-xl bg-[#1e293b] border border-[#334155] text-center">
            <p className="text-xl mb-1">✨</p>
            <p className="text-sm text-gray-300">Elegant Experience</p>
          </div>

        </div>

        {/* Info */}
        <div className="grid sm:grid-cols-3 gap-4 text-center text-sm text-gray-300">

          <div className="p-4 rounded-xl bg-black/30 border border-white/10">
            👩‍💻 <br /> Author <br />
            <span className="text-indigo-400">Ali Raza</span>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-white/10">
            ⚙️ <br /> Built With <br />
            <span className="text-indigo-400">Next.js + Tailwind</span>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-white/10">
            🚀 <br /> Experience <br />
            <span className="text-indigo-400">Smooth & Responsive</span>
          </div>

        </div>

        {/* Flow */}
        <div className="text-center text-sm text-gray-400">
          Enter your name → Choose subject → Play → Get result
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}