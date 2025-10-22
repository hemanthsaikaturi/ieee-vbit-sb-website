import type { Metadata } from "next";
import "./globals.css";
import Favicon from './favicon.png';
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";

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
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}