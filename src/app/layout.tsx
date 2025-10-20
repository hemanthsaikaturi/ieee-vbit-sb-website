import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Favicon from './favicon.png';
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SplashScreen } from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: {
    default: 'IEEE - VBIT SB | Advancing Technology for Humanity',
    template: '%s | IEEE - VBIT SB',
  },
  description: "The official website for the IEEE Student Branch at Vignana Bharathi Institute of Technology.",
  icons: [{ rel: 'icon', url: Favicon.src }], 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="" suppressHydrationWarning={true}>
        <SplashScreen />
        
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-32">
            {children}
          </main>
          <Footer />
        </div>
        
        <ScrollToTopButton />
      </body>
    </html>
  );
}