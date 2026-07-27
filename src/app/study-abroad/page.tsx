import type { Metadata } from "next";
import { StudyIndexContent } from "@/components/pages/study-index-content";

export const metadata: Metadata = {
  title: "Study Abroad",
  description:
    "Explore top study destinations with Grace Travel Consultancy: USA, Brazil, Canada, UK, France, Germany, Netherlands, Belgium, Sweden, Finland, Hungary, Switzerland, Poland, Bulgaria, Lithuania, Malta, and China.",
};

export default function StudyAbroadIndexPage() {
  return <StudyIndexContent />;
}
