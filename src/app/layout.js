import Footer from "@/compenents/Footer/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/compenents/Navbar/Navbar";
import SplashScreen from "@/compenents/splashscreen/splashscreen";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || "Puru's"}</title>
        <meta
          name="description"
          content={description || "Puru's Enterprises"}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H2VS7XQ1VW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-H2VS7XQ1VW');
            `,
          }}
        ></script>
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
