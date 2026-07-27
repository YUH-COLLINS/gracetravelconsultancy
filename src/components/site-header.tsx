"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { copy } from "@/lib/i18n";
import { useUiStore } from "@/lib/store";
import { UiPreferences } from "@/components/ui-preferences";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language } = useUiStore();
  const t = copy[language];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#0B3D91]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="group inline-flex items-center">
          <Image
            src="/images/graceltd-logo.png"
            alt="GraceLTD logo"
            width={300}
            height={95}
            priority
            className="brand-logo logo-blend h-12 w-auto max-w-[220px] shrink-0 object-contain transition duration-300"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-[#D4AF37]">
              {t.nav[link.key] ?? link.key}
            </Link>
          ))}
          <UiPreferences />
          <a
            href="https://wa.me/237672154938"
            className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#1E293B]"
          >
            {t.common.whatsapp}
          </a>
        </nav>
        <button onClick={() => setOpen((s) => !s)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="space-y-2 border-t border-white/20 px-4 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2 text-sm" onClick={() => setOpen(false)}>
              {t.nav[link.key] ?? link.key}
            </Link>
          ))}
          <div className="pt-1">
            <UiPreferences mobile />
          </div>
          <a className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-3 py-2 text-[#1E293B]" href="tel:+237672154938">
            <PhoneCall size={16} /> {t.common.callNow}
          </a>
        </div>
      )}
    </header>
  );
}
