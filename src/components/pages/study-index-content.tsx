"use client";

import Link from "next/link";
import { COUNTRIES } from "@/lib/data";
import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function StudyIndexContent() {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-semibold text-slate-900">{t.page.studyTitle}</h1>
      <p className="mt-3 text-slate-600">{t.page.studyLead}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {COUNTRIES.map((country) => (
          <article key={country.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${country.heroImage})` }} />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-900">{country.flag} {country.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{country.overview}</p>
              <div className="mt-4 flex gap-3">
                <Link href={`/study-abroad/${country.slug}`} className="rounded-lg bg-[#0B3D91] px-3 py-2 text-sm font-semibold text-white">{t.common.viewCountry}</Link>
                <Link href="/contact" className="rounded-lg border px-3 py-2 text-sm font-semibold">{t.common.apply}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
