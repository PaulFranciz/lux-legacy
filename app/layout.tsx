import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lux Legacy Agency | We Run Your Business Backend",
  description: "Virtual Assistance, Branding, Web Design, CRM & Strategy. We handle the operations while you focus on building your empire. Seamless support across Canada, USA & Nigeria.",
  keywords: ["Virtual Assistant", "Branding Agency", "Web Design", "CRM Strategy", "Business Operations", "Digital Marketing", "Business Support", "Canada", "USA", "Nigeria"],
  authors: [{ name: "Lux Legacy Agency" }],
  creator: "Lux Legacy Agency",
  publisher: "Lux Legacy Agency",
  metadataBase: new URL("https://luxlegacy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxlegacy.vercel.app",
    title: "Lux Legacy Agency | We Run Your Business Backend",
    description: "Virtual Assistance, Branding, Web Design, CRM & Strategy. We handle the operations while you focus on building your empire. Seamless support across Canada, USA & Nigeria.",
    siteName: "Lux Legacy Agency",
    images: [
      {
        url: "/images/lux.webp",
        width: 1200,
        height: 630,
        alt: "Lux Legacy Agency - We Run Your Business Backend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Legacy Agency | We Run Your Business Backend",
    description: "Virtual Assistance, Branding, Web Design, CRM & Strategy. We handle the operations while you focus on building your empire.",
    images: ["/images/lux.webp"],
    creator: "@luxlegacy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
