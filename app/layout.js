import { Angkor,Akatab } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/QueryProvider";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WrapperClient from "@/providers/WrapperClient";

export const angkor = Angkor({
  subset:['latin'],
  weight:['400']
})
export const akatab = Akatab({
  subset:['latin'],
  weight:['400']
})

export const metadata = {
  title: "Casual Wear",
  description: "store for clothes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${akatab.className} antialiased`}
      >
        <WrapperClient>
          {children}
        </WrapperClient>
      </body>
    </html>
  );
}