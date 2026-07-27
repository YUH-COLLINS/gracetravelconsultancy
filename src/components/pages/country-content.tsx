"use client";

import Link from "next/link";
import { StudyApplicationForm } from "@/components/forms";
import type { CountryInfo } from "@/lib/data";
import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function CountryContent({ item }: { item: CountryInfo }) {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <main>
      <section className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.heroImage})` }} />
        <div className="absolute inset-0 bg-[#0B3D91]/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-sm uppercase tracking-widest">{t.nav.study} • {item.flag}</p>
          <h1 className="mt-3 text-5xl font-semibold">{t.page.countryStudyIn} {item.name}</h1>
          <p className="mt-4 max-w-3xl text-white/90">{item.overview}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <Info title={t.page.benefits} items={item.benefits} />
          <Info title={t.page.availablePrograms} items={item.programs} />
          <Info title={t.page.requirements} items={item.requirements} />
          <Info title={t.page.visaProcess} items={item.visaProcess} />
          <Info title={t.page.universities} items={item.universities} />
          <Info title={t.page.timeline} items={item.timeline} />
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{t.page.costs}</h2>
            <p className="mt-2 text-sm text-slate-600">{t.page.avgTuition}: {item.tuitionRange}</p>
            <p className="text-sm text-slate-600">{t.page.avgLiving}: {item.livingCost}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
            <div className="mt-3 space-y-2 text-sm">
              {item.faq.map((f) => (
                <div key={f.question}>
                  <p className="font-semibold text-slate-800">{f.question}</p>
                  <p className="text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact" className="inline-flex rounded-xl bg-[#0B3D91] px-5 py-3 font-semibold text-white">{t.common.apply} {item.name}</Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#F7F8FA] p-6 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900">{t.page.startApplication}</h2>
          <p className="mt-2 text-sm text-slate-600">Complete this form and receive personalized admission guidance.</p>
          <div className="mt-4">
            <StudyApplicationForm countryDefault={item.name} />
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
