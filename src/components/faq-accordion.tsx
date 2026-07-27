"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({
  items,
}: {
  items: { id: number; question: string; answer: string }[];
}) {
  const [openId, setOpenId] = useState<number | null>(1);
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-medium text-slate-800">{item.question}</span>
              <ChevronDown size={18} className={isOpen ? "rotate-180 transition" : "transition"} />
            </button>
            {isOpen && <p className="mt-3 text-sm text-slate-600">{item.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
