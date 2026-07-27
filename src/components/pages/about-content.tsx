"use client";

import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function AboutContent() {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="text-sm uppercase tracking-widest text-[#00AEEF]">Grace Travel Consultancy</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-900">{t.page.aboutTitle}</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{t.page.aboutLead}</p>
      </section>

      <section className="bg-[#F7F8FA] py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-8">
          {[
            ["Mission", "Helping clients access global opportunities with reliable end-to-end support."],
            ["Vision", "To become Central Africa’s most trusted premium travel and study consultancy."],
            ["Core Values", "Integrity, Excellence, Transparency, Speed, and Client-Centered Service."],
          ].map(([title, text]) => (
            <article key={String(title)} className="rounded-3xl border border-slate-200 bg-white p-6 dark:bg-slate-800">
              <h2 className="text-xl font-semibold text-slate-900">{String(title)}</h2>
              <p className="mt-3 text-sm text-slate-600">{String(text)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
