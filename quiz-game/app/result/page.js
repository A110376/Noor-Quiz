"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Result() {
  const [data, setData] = useState(null);
  const [animatedScore, setAnimatedScore] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const score = Number(localStorage.getItem("score")) || 0;
    const total = Number(localStorage.getItem("total")) || 0;
    const name = localStorage.getItem("name")?.trim() || "Guest";
    const subject = localStorage.getItem("subject") || "";

    const today = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    setData({ score, total, name, subject, date: today });

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setAnimatedScore(i);
      if (i >= score) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  const percentage = data.total ? (data.score / data.total) * 100 : 0;

  const subjectMap = {
    allah_names: "Allah Names Quiz",
    prophet_muhammad_life: "Seerat Quiz",
  };

  const subjectLabel = subjectMap[data.subject] || "Quiz";

  const getMessage = () => {
    if (percentage >= 80) return "🌟 Excellent Performance!";
    if (percentage >= 60) return "👏 Good Job!";
    if (percentage >= 40) return "👍 Keep Improving!";
    return "📚 Keep Practicing!";
  };

  const clearStorage = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("total");
    localStorage.removeItem("name");
    localStorage.removeItem("subject");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#020617]">

      {percentage >= 60 && (
        <Confetti width={width} height={height} />
      )}

      {/* glow background */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600 blur-[160px] opacity-20 top-10"></div>

      {/* CARD */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10">

        {/* TOP SECTION (important fix) */}
        <div className="flex flex-col items-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 py-8 px-6">

          {/* BIG IMAGE */}
          <div className="relative w-28 h-28 mb-4">
            <Image
              src="/main.png"
              alt="logo"
              fill
              sizes="112px"
              className="rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </div>

          {/* SUBJECT */}
          <span className="px-4 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mb-3">
            {subjectLabel}
          </span>

          {/* NAME */}
          <h1 className="text-lg text-gray-200 text-center">
            {data.name}, your result is
          </h1>

        </div>

        {/* BOTTOM SECTION */}
        <div className="p-6 sm:p-8 text-center space-y-6">

          {/* SCORE */}
          <div>
            <p className="text-5xl font-bold text-white tracking-wide">
              {animatedScore}
              <span className="text-gray-400 text-2xl">/{data.total}</span>
            </p>
          </div>

          {/* PROGRESS */}
          <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* MESSAGE */}
          <p className="text-sm text-gray-300">
            {getMessage()}
          </p>

          {/* DATE */}
          <p className="text-xs text-gray-500">
            📅 {data.date}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 justify-center pt-2">

            <Link href="/" onClick={clearStorage}>
              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition font-medium">
                Home
              </button>
            </Link>

            <Link href="/quiz">
              <button className="px-6 py-2 rounded-xl bg-green-600 hover:bg-green-500 hover:scale-105 transition font-medium">
                Retry
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}