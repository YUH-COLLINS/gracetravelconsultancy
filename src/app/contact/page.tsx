import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Grace Travel Consultancy in Douala for consultations, visa inquiries, and travel support.",
};

export default function ContactPage() {
  return <ContactContent />;
}
