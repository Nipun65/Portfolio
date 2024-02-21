import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Nunito_Sans({ subsets: ["latin"] });

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Fredoka:wght@300..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Riot&family=Style+Script&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Fredoka:wght@300..700&family=Style+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Fredoka:wght@300..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Style+Script&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
