import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

import "aos/dist/aos.css"; // You can also use <link> for styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manawwar Saifi — Full-Stack MERN Developer",
  description: "Full-Stack MERN Developer with 3+ years of experience. React, Node.js, MongoDB, Docker, CI/CD. 10+ production apps, 18+ client projects.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Manawwar Saifi — Full-Stack MERN Developer",
    description: "Full-Stack MERN Developer with 3+ years of experience. React, Node.js, MongoDB, Docker, CI/CD.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manawwar Saifi — Full-Stack MERN Developer",
    description: "Full-Stack MERN Developer with 3+ years of experience.",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barriecito&family=SUSE+Mono:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${poppins.className} antialiased`}
      >
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
