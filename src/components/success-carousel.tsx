"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

type Item = {
  id: number;
  fullName: string;
  country: string;
  category: string;
  quote: string;
  rating: number;
};

export function SuccessCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  if (!items.length) {
    return <p className="text-sm text-slate-600">Testimonials will appear here shortly.</p>;
  }

  const active = items[index];

  return (
    <motion.div
      key={active.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex gap-1 text-[#D4AF37]">
        {Array.from({ length: active.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-lg text-slate-700">“{active.quote}”</p>
      <p className="mt-4 font-semibold text-slate-900">{active.fullName}</p>
      <p className="text-sm text-slate-500">{active.category} • {active.country}</p>
    </motion.div>
  );
}
