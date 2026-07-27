"use client";

import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";

export function SiteFooter() {
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <footer className="bg-[#0B3D91] text-white dark:bg-[#020617]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Image
            src="/images/graceltd-logo.png"
            alt="GraceLTD logo"
            width={300}
            height={95}
            className="brand-logo logo-blend-dark h-12 w-auto max-w-[220px] shrink-0 object-contain"
          />
          <p className="mt-3 text-sm text-white/80">{t.footer.tagline}</p>
          <div className="mt-4 space-y-1 text-sm text-white/80">
            <p className="font-semibold text-[#D4AF37]">Douala Branch</p>
            <p>Feu Rouge Bessengue, beside Afriland First Bank</p>
            <p>Douala, Cameroon</p>
          </div>
          <div className="mt-4 space-y-1 text-sm text-white/80">
            <p className="font-semibold text-[#D4AF37]">Buea Branch</p>
            <p>Check point, Buea</p>
            <p>South West Region, Cameroon</p>
            <p>About 100 meters from Cathedral building</p>
            <p>Opposite Saint Luke Junction</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">{t.footer.quickLinks}</h4>
          <div className="mt-4 space-y-2 text-sm text-white/80">
            <Link className="block" href="/about">{t.nav.about}</Link>
            <Link className="block" href="/study-abroad">{t.nav.study}</Link>
            <Link className="block" href="/blog">{t.nav.blog}</Link>
            <Link className="block" href="/testimonials">{t.nav.testimonials}</Link>
            <Link className="block" href="/contact">{t.nav.contact}</Link>
            <Link className="block" href="/admin/login">{t.nav.admin}</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">{t.footer.contact}</h4>
          <div className="mt-4 space-y-3 text-sm text-white/80">
            <div className="space-y-1">
              <a className="block" href="tel:+48511374818">+48 511 374 818</a>
              <a className="block" href="tel:+237672154938">+237 672 154 938</a>
            </div>
            <a className="block" href="mailto:info@gracegroupofcompanies.com">info@gracegroupofcompanies.com</a>
            <a className="block" href="https://www.gracegroupofcompanies.com">www.gracegroupofcompanies.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Grace Travel Consultancy. {t.footer.rights}
      </div>
    </footer>
  );
}
