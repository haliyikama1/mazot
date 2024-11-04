import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import Phone from "@/components/Phone/Phone";
import Notice from "@/components/Notice/Notice";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ACT Akaryakıt",
  description: "Mazot satın almak için güvenilir ve kaliteli adres",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Notice />
          <Navbar />
          <Whatsapp />
          <Phone />
            {children}
          <Footer />
      </body>
    </html>
  );
}
