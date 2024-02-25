import type { Metadata } from "next";
import {
  Nunito_Sans,
  Dancing_Script,
  Caveat,
  Lobster,
  Poppins,
  Courier_Prime,
} from "next/font/google";
import "./globals.css";

const inter = Nunito_Sans({ subsets: ["latin"] });

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nipun Patel",
  description: "Nipun's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${dancingScript.variable} ${caveat.variable} ${lobster.variable} ${poppins.variable} ${courier.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
