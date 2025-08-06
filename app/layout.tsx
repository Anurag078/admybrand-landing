import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

// SEO & Social Sharing Metadata with metadataBase included
export const metadata: Metadata = {
  metadataBase: new URL("https://admybrand.com"), 
  title: "ADmyBRAND AI Suite | AI Marketing Tool",
  description:
    "Supercharge your marketing with AI-powered automation, analytics, and smart insights.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "ADmyBRAND",
    "campaign insights",
    "SaaS tool",
  ],
  authors: [{ name: "ADmyBRAND Team" }],
  openGraph: {
    title: "ADmyBRAND AI Suite",
    description:
      "Smarter marketing starts here. AI-powered campaign automation and insights.",
    url: "https://admybrand.com",
    siteName: "ADmyBRAND",
    images: [
      {
        url: "/images/og-image.jpg", // will resolve to https://admybrand.com/images/og-image.jpg
        width: 1200,
        height: 630,
        alt: "ADmyBRAND Dashboard Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite",
    description: "Automate your marketing with AI tools.",
    images: ["/images/og-image.jpg"], // resolves with metadataBase
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*  Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Canonical */}
        <link rel="canonical" href="https://admybrand.com" />

        {/*  Robots */}
        <meta name="robots" content="index, follow" />

        {/*  No need to manually add metadata tags here.
            They will be injected by Next.js based on the `metadata` object above. */}
      </head>
      <body className="antialiased text-gray-800 bg-white">
        <Navbar />
        <main className="pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
