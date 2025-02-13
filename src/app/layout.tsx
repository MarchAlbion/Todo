import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Veel Todo",
  description: "Veel test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-l from-forest-green-color to-forest-color">
      <body className={`${PoppinsFont.variable}   antialiased `}>{children}</body>
    </html>
  );
}
