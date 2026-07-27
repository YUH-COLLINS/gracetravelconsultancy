import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRIES } from "@/lib/data";
import { CountryContent } from "@/components/pages/country-content";

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const found = COUNTRIES.find((item) => item.slug === country);
  if (!found) return { title: "Country" };

  return {
    title: `${found.name} Study Abroad`,
    description: `Study in ${found.name} with Grace Travel Consultancy. View tuition, living costs, requirements, visa process, and timelines.`,
  };
}

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country: country.slug }));
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const item = COUNTRIES.find((entry) => entry.slug === country);
  if (!item) return notFound();

  return <CountryContent item={item} />;
}
