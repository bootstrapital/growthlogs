import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowthLogs",
  description: "Track, manage, and learn from every experiment with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-100 p-8 text-gray-800">
          <nav className="mb-8">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  View All Experiments
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-blue-600 hover:underline">
                  Create New Experiment
                </Link>
              </li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
