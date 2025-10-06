import type { Metadata } from "next";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

// ✅ Use Inter and Roboto Mono instead of Geist
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sindhu | Portfolio",
  description:
    "AI/ML Engineer & Full-Stack Developer | Building intelligent systems & scalable apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
          <Analytics />
        </main>

        <Footer />
      </body>
    </html>
  );
}
