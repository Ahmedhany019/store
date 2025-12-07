import {Akatab } from "next/font/google";
import "./globals.css";
import Timeline from "@/components/Timeline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProvider from "@/providers/ClientProvider";
import { Toaster } from "react-hot-toast";

const akatab = Akatab({
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
      <ClientProvider>
      <Timeline />
      <Navbar />
        {children}
      <Footer />
      <Toaster />
      </ClientProvider>
      </body>
    </html>
  );
}``