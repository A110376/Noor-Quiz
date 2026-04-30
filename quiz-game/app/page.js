"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("allah_names");
  const [toast, setToast] = useState("");
  const router = useRouter();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const start = () => {
    if (!name.trim()) {
      showToast("⚠️ Please enter your name");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("subject", subject);
    router.push("/quiz");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="px-4 py-2 rounded-lg bg-black/80 text-white text-sm backdrop-blur border border-white/10 shadow-lg animate-fade-in">
            {toast}
          </div>
        </div>
      )}

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-600 blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Logo */}
      <div className="w-full flex justify-center">
        <Image
          src="/main.png"
          width={220}
          height={220}
          alt="logo"
          className="w-40 sm:w-56 h-auto"
          priority
        />
      </div>

      {/* Tagline */}
      <p className="text-gray-400 mb-8 text-sm tracking-wide text-center">
        A calm and elegant way to test your knowledge
      </p>

      {/* Card */}
      <div className="w-full max-w-sm p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

        <input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-black/30 border border-white/10"
        >
          <option value="allah_names">Allah Names</option>
          <option value="prophet_muhammad_life">Seerat</option>
        </select>

        <button
          onClick={start}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-[1.02] transition"
        >
          Start Quiz
        </button>

      </div>
    </div>
  );
}