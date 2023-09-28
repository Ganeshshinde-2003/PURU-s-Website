"use client"

import Footer from "@/compenents/Footer/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/compenents/Navbar/Navbar";
import { useEffect } from 'react';
import { initGA, logPageView } from './ga.js';
import SplashScreen from "@/compenents/splashscreen/splashscreen";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children, title, description }) {
  useEffect(() => {
    // Initialize Google Analytics and log the initial page view
    initGA();
    logPageView();
  }, []);

  return (
    <>
      <Head>
        <title>{title || "Puru's"}</title>
        <meta name="description" content={description || "Puru's Enterprises"} />
      </Head>
      <html lang="en">
        <body className={poppins.className}>
          <SplashScreen />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
