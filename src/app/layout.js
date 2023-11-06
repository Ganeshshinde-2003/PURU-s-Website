import Footer from "@/compenents/Footer/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/compenents/Navbar/Navbar";
import SplashScreen from "@/compenents/splashscreen/splashscreen";
import GoogleAnalytics from "./GoogleAnalytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Puru's",
  description: "Puru's Enterprises",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <GoogleAnalytics GA_TRACKING_ID="G-H2VS7XQ1VW" />
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
