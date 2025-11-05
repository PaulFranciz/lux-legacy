import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lux Legacy Agency | We Run Your Business Backend",
  description: "Virtual Assistance, Branding, Web Design, CRM & Strategy. We handle the operations while you focus on building your empire. Seamless support across Canada, USA & Nigeria.",
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
