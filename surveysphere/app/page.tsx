// app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "Voice-Based Survey Builder",
    image: "/feature_1.png",
    description: "Create surveys using voice commands. AI handles logic like skip patterns and validations."
  },
  {
    title: "Gamified Question Wording",
    image: "/feature_4.png",
    description: "Survey questions become games — with badges, levels, and visual progress bars."
  },
  {
    title: "Avatar-Based Questioning",
    image: "/feature_2.png",
    description: "Animated avatars talk to respondents and collect feedback."
  }
  // Add more features here
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">🎯 SurveySphere Storyboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            onClick={() => setSelected(f)}
            className="border rounded-xl p-4 cursor-pointer shadow hover:shadow-lg transition"
          >
            <Image src={f.image} alt={f.title} width={400} height={250} className="rounded mb-4" />
            <h2 className="text-xl font-semibold">{f.title}</h2>
            <p className="text-sm text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
            <button className="float-right text-red-600" onClick={() => setSelected(null)}>X</button>
            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <Image src={selected.image} alt={selected.title} width={600} height={300} className="rounded-xl mb-4" />
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
