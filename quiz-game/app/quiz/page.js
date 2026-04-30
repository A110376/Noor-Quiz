"use client";
import { useEffect, useState } from "react";
import { questions } from "../../data/questions";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const router = useRouter();

  const [qList, setQList] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(null);
  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    const subject = localStorage.getItem("subject");
    setSubjectName(subject);

    setQList(questions[subject] || []);
  }, []);

  if (!qList.length) return null;

  const current = qList[index];

  const handle = (opt) => {
    if (selected !== null) return;

    setSelected(opt);

    const isCorrect = opt === current.answer;
    setStatus(isCorrect ? "correct" : "wrong");

    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (index + 1 < qList.length) {
        setIndex((prev) => prev + 1);
        setSelected(null);
        setStatus(null);
      } else {
        const finalScore = isCorrect ? score + 1 : score;
        localStorage.setItem("score", finalScore);
        localStorage.setItem("total", qList.length);
        router.push("/result");
      }
    }, 1200);
  };

  const progress = ((index + 1) / qList.length) * 100;

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-10">

      {/* ⭐ SUBJECT BADGE */}
      <div className="text-center mb-6">
        <span className="px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-400/30">
          {subjectName === "allah_names"
            ? "Allah Names"
            : "Seerat (Prophet ﷺ Life)"}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full bg-[#1e293b] h-2 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">

        {/* Question count */}
        <p className="text-xs sm:text-sm text-gray-400 mb-2">
          Question {index + 1} of {qList.length}
        </p>

        {/* Question */}
        <h2 className="mb-6 text-lg sm:text-xl font-medium leading-relaxed">
          {current.question}
        </h2>

        {/* Options (same as yours) */}
        <div className="space-y-3">
          {current.options.map((opt, i) => {
            const isCorrect = opt === current.answer;
            const isSelected = opt === selected;

            return (
              <button
                key={i}
                onClick={() => handle(opt)}
                disabled={selected !== null}
                className={`w-full p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 transform active:scale-95
                disabled:cursor-not-allowed
                ${
                  selected
                    ? isCorrect
                      ? "bg-green-500 border-green-300"
                      : isSelected
                      ? "bg-red-500 border-red-300"
                      : "opacity-40 bg-[#1e293b]"
                    : "bg-[#1e293b] border-[#334155] hover:border-indigo-400"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selected && (
          <div className="text-center mt-6 text-lg font-semibold">
            {status === "correct" ? "🎉 Correct!" : "😵 Oops!"}
          </div>
        )}

      </div>
    </div>
  );
}