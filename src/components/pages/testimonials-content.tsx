"use client";

import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function TestimonialsContent({
  rows,
}: {
  rows: { id: number; fullName: string; country: string; category: string; quote: string; rating: number }[];
}) {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-semibold text-slate-900">{t.page.testimonialsTitle}</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {rows.map((row) => (
          <article key={row.id} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-[#D4AF37]">{"★".repeat(row.rating)}</p>
            <p className="mt-3 text-slate-700">“{row.quote}”</p>
            <p className="mt-4 font-semibold text-slate-900">{row.fullName}</p>
            <p className="text-sm text-slate-500">{row.category} • {row.country}</p>
          </article>
        ))}
        {!rows.length && <p className="text-sm text-slate-600">{t.common.noTestimonials}</p>}
      </div>
    </main>
  );
}
