"use client";

import { ConsultationForm, GeneralInquiryForm } from "@/components/forms";
import { ContactMap } from "@/components/contact-map";
import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function ContactContent() {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-semibold text-slate-900">{t.page.contactTitle}</h1>
        <p className="mt-3 text-slate-600">{t.page.contactLead}</p>

        <div className="mt-8 grid gap-4 rounded-2xl bg-[#F7F8FA] p-6 md:grid-cols-3 dark:bg-slate-900">
          <a href="tel:+237672154938" className="rounded-xl border border-slate-200 bg-white p-4">📞 +237 672 154 938</a>
          <a href="mailto:info@gracegroupofcompanies.com" className="rounded-xl border border-slate-200 bg-white p-4">📧 info@gracegroupofcompanies.com</a>
          <a href="https://wa.me/237672154938" className="rounded-xl border border-slate-200 bg-white p-4">💬 {t.common.whatsapp}</a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 md:grid-cols-2 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{t.page.bookConsultation}</h2>
          <div className="mt-4"><ConsultationForm /></div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{t.page.generalInquiry}</h2>
          <div className="mt-4"><GeneralInquiryForm /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">{t.page.officeLocation}</h2>
        <ContactMap />
      </section>
    </main>
  );
}
