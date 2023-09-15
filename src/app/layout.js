import Footer from "@/compenents/Footer/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/compenents/Navbar/Navbar";
import styles from "./page.module.css";
import SplashScreen from "@/compenents/splashscreen/splashscreen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "PURU's",
  description: "puru's enterprises",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
