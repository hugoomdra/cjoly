import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Clément Joly - Soccer Player 🔥</title>

        <meta name="description" content="Clément Joly - Soccer Player 🔥" />

        <meta property="og:title" content="Clément Joly - Soccer Player 🔥" />
        <meta property="og:description" content="Professional Soccer Player | Best Player of FC D2S 4 times in a row" />
        <meta property="og:image" content="https://clement-joly.vercel.app/assets/img/clement.jpg" />
        <meta property="og:url" content="https://clement-joly.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clément Joly - Soccer Player 🔥" />
        <meta name="twitter:description" content="Professional Soccer Player | Best Player of FC D2S 4 times in a row" />
        <meta name="twitter:image" content="https://clement-joly.vercel.app/assets/img/clement.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
