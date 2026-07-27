"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { COUNTRIES, FAQ_ITEMS, INSTITUTIONS, PARTNERS, SERVICES } from "@/lib/data";
import { useUiStore } from "@/lib/store";
import { copy } from "@/lib/i18n";
import { InquiryModal } from "@/components/inquiry-modal";
import { FaqAccordion } from "@/components/faq-accordion";
import { SuccessCarousel } from "@/components/success-carousel";
import { NewsletterForm } from "@/components/forms";

export function HomeContent({
  testimonials,
  blogPosts,
}: {
  testimonials: { id: number; fullName: string; country: string; category: string; quote: string; rating: number }[];
  blogPosts: { id: number; title: string; excerpt: string; slug: string; category: string; createdAt: string }[];
}) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const { searchTerm, setSearchTerm, language, theme } = useUiStore();
  const t = copy[language].home;
  const common = copy[language].common;

  const filteredCountries = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return COUNTRIES;
    return COUNTRIES.filter((c) => c.name.toLowerCase().includes(term));
  }, [searchTerm]);

  const activeService = SERVICES.find((s) => s.id === activeServiceId);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <div className={theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-white text-[#1E293B]"}>
      <section className="relative overflow-hidden bg-[linear-gradient(140deg,#0B3D91_0%,#07265e_65%)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            {t.heroTitle}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">{t.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/study-abroad" className="rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-slate-900">{t.startApplication}</Link>
            <Link href="/study-abroad" className="rounded-full border border-white/40 px-5 py-3 font-semibold">{t.browseDestinations}</Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {["1000+ Consultations", "95% Client Satisfaction", "Global Study Destinations", "Professional Support"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">✔ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[#00AEEF]">{t.whatWeHandle}</p>
        <h2 className="mt-2 text-3xl font-semibold">{t.fullJourney}</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">{t.handleIntro}</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {SERVICES.map((service, idx) => (
            <motion.button
              variants={item}
              whileHover={{ y: -8, scale: 1.01 }}
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              className={`premium-card overflow-hidden text-left ${idx % 3 === 0 ? "float-soft" : ""}`}
            >
              <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-3xl font-semibold">{t.destinationsTitle}</h2>
        <p className="mt-2 text-slate-600">{t.destinationsSub}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h3 className="text-xl font-semibold">{COUNTRIES.length} Active Countries</h3>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={common.searchCountry}
            className="rounded-xl border border-slate-300 px-4 py-2"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredCountries.map((country) => (
            <motion.article key={country.slug} variants={item} whileHover={{ y: -7 }} className="premium-card overflow-hidden">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${country.heroImage})` }} />
              <div className="p-5">
                <p className="text-sm text-slate-500">{country.flag} {country.name}</p>
                <p className="mt-2 text-sm text-slate-600">{country.overview}</p>
                <div className="mt-4 flex gap-3">
                  <Link href={`/study-abroad/${country.slug}`} className="rounded-lg bg-[#0B3D91] px-3 py-2 text-sm font-semibold text-white">{common.learnMore}</Link>
                  <Link href="/contact" className="rounded-lg border px-3 py-2 text-sm font-semibold">{common.apply}</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6">
          <h3 className="text-2xl font-semibold">{t.somewhereElse}</h3>
          <p className="mt-2 text-sm text-slate-600">
            We regularly place students outside this list. Tell us the country you have in mind and we will tell you honestly whether it is realistic, and what it would take.
          </p>
          <Link href="/contact" className="mt-4 inline-flex rounded-xl bg-[#0B3D91] px-4 py-3 text-sm font-semibold text-white">
            {t.askCountry}
          </Link>
          <p className="mt-4 text-xs text-slate-500">Fees, intakes and entry requirements vary by programme and change periodically.</p>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">{t.institutionsTitle}</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">{t.institutionsSub}</p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {INSTITUTIONS.map((uni) => (
              <motion.article key={`${uni.name}-${uni.country}`} variants={item} whileHover={{ y: -6 }} className="premium-card overflow-hidden">
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${uni.image})` }} />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{uni.name}</h3>
                  <p className="text-sm text-slate-600">{uni.country}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Success Stories</h2>
        <div className="mt-8">
          <SuccessCarousel items={testimonials} />
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Latest Travel News</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <motion.article key={post.id} variants={item} whileHover={{ y: -6 }} className="premium-card p-5">
                <p className="text-xs uppercase tracking-wide text-[#00AEEF]">{post.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-3 text-xs text-slate-500">{new Date(post.createdAt).toLocaleDateString()}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-8">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Get Visa & Scholarship Updates</h2>
          <p className="mt-2 text-sm text-slate-600">Subscribe to receive travel alerts, embassy updates, and admissions deadlines.</p>
          <div className="mt-5">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="bg-[#0B3D91] py-8 text-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 md:px-8"
        >
          <p className="text-sm uppercase tracking-wider text-white/70">Our Partners</p>
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner}
              variants={item}
              whileHover={{ y: -3, scale: 1.03 }}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur"
            >
              {partner}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-[#0B3D91] to-[#0056c7] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-semibold">Ready to Begin Your Journey?</h2>
          <p className="mt-3 text-white/90">Book your consultation today.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/study-abroad" className="rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-slate-900">Apply Now</Link>
            <a href="https://wa.me/237672154938" className="rounded-full border border-white/40 px-5 py-3 font-semibold">Talk on WhatsApp</a>
          </div>
        </div>
      </section>

      {activeService && <InquiryModal service={activeService} onClose={() => setActiveServiceId(null)} />}
    </div>
  );
}
