import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto} from "next/font/google";
import "./reset.css"
import "./globals.css";

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  variable: '--font-roboto'
})

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
  title: "Ramiz Abdulla",
  description: "Ramiz Abdulla's portfoilio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for top bar color */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" /> {/* Set your desired color */}
        <title>Ramiz Abdulla Portfolio</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
