// import Header from "@/components/shared/Header";
// import Footer from "@/components/shared/Footer";
import config from "@/config/siteConfig";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Icon from "@/components/Icon/icon";

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
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-nectar-black-1 grid grid-rows-6 h-screen`}
      >
        {/** there seems to be no header and footer in the landing layout */}
        {/* <Header /> */}

        {/** applying a holy grail layout instead of box for the side nav */}
        <div className="row-span-4 w-screen">
          <div className="grid grid-cols-12">
            <nav className="col-span-2">
              <div className="flex flex-col bg-nectar-black-2 h-screen w-16 items-center pt-6">
                <Icon name="Heart2" />
              </div>
            </nav>
            <main className="col-span-8 md:px-10">{children}</main>
            <aside className="col-span-2">{/** for Custom aside */}</aside>
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
