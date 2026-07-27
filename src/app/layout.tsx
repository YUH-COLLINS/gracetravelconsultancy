import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { AppProviders } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gracegroupofcompanies.com"),
  title: {
    default: "Grace Travel Consultancy | Study Abroad & Visa Assistance Cameroon",
    template: "%s | Grace Travel Consultancy",
  },
  description:
    "Premium international travel and education consultancy in Douala, Cameroon. Study abroad, visa assistance, flight booking, travel insurance, and consultation services.",
  keywords: [
    "Study Abroad Cameroon",
    "Travel Agency Cameroon",
    "Visa Assistance Cameroon",
    "Canada Study Visa",
    "France Student Visa",
    "Germany Study Abroad",
    "Affordable Flight Booking",
    "Travel Insurance Cameroon",
    "Grace Travel Consultancy",
  ],
  icons: {
    icon: "/images/graceltd-logo-exact.png",
    shortcut: "/images/graceltd-logo-exact.png",
    apple: "/images/graceltd-logo-exact.png",
  },
  manifest: "/manifest.webmanifest",
};

const initScript = `
(function(){
  try {
    var theme = localStorage.getItem('gtc_theme') || 'light';
    var lang = localStorage.getItem('gtc_language') || 'en';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('lang', lang);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} bg-white text-[#1E293B] antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <AppProviders>
          <SiteHeader />
          {children}
          <a
            href="https://wa.me/237672154938"
            className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
          >
            WhatsApp
          </a>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
