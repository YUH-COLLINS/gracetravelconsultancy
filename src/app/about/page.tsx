import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Grace Travel Consultancy, our mission, values, achievements, and expert team.",
};

export default function AboutPage() {
  return <AboutContent />;
}
