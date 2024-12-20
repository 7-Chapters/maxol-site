import { Poppins } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Initialize Poppins font
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Maxol",
  description: "Where Tradition Meets Innovation in Every Product.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppinsFont.variable}>
        <Header/>
        <PageTransition>
          {children}
        </PageTransition>
        <Footer/>
      </body>
    </html>
  );
}