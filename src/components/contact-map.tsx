"use client";

import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("@/components/map-placeholder").then((mod) => mod.OfficeMap), {
  ssr: false,
  loading: () => <div className="h-[320px] animate-pulse rounded-2xl bg-slate-200" />,
});

export function ContactMap() {
  return <OfficeMap />;
}
