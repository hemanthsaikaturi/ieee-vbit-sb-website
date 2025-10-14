import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Favicon from './favicon.png';
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

// The metadata object will now work perfectly again
export const metadata: Metadata = {
  title: {
    default: 'IEEE - VBIT SB | Advancing Technology for Humanity',
    template: '%s | IEEE - VBIT SB',
  },
  description: "The official website for the IEEE Student Branch at Vignana Bharathi Institute of Technology...",
  icons: [{ rel: 'icon', url: Favicon.src }], 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="" suppressHydrationWarning={true}>
        <ClientLayoutWrapper>
          <Header />
          <main className="flex-grow pt-32">
            {children}
          </main>
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}