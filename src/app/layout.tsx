import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Favicon from './favicon.png';
import { ClientLayoutWrapper } from "@/components/ClientLayoutWrapper";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

// Definitive metadata for SEO and Social Sharing
export const metadata: Metadata = {
  metadataBase: new URL('https://ieeevbitsb.in'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'IEEE - VBIT SB | Advancing Technology for Humanity',
    template: '%s | IEEE - VBIT SB',
  },
  description: "The official website for the IEEE Student Branch at Vignana Bharathi Institute of Technology.",  
  icons: [{ rel: 'icon', url: Favicon.src }],
  
  // Open Graph metadata for professional link previews on social media
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ieeevbitsb.in',
    title: 'IEEE - VBIT SB | Advancing Technology for Humanity',
    description: 'The official website for the IEEE Student Branch at VBIT, a hub for technical events, workshops, and community engagement.',
    siteName: 'IEEE - VBIT SB',
    images: [
      {
        url: 'https://ieeevbitsb.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IEEE VBIT SB Logo on a branded background',
      },
    ],
  },
};

// Structured Data using JSON-LD for enhanced SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'IEEE VBIT Student Branch',
  'alternateName': 'IEEE VBIT SB',
  'url': 'https://ieeevbitsb.in',
  'logo': 'https://ieeevbitsb.in/ieee-vbit-sb.png',
  'contactPoint': {
    '@type': 'ContactPoint',
    'email': 'ieeevbitsbdoc@gmail.com',
    'contactType': 'Student Branch Inquiries',
  },
  'sameAs': [
    'https://www.facebook.com/ieeevbitsb',
    'https://www.instagram.com/ieee_vbitsb/',
    'https://www.linkedin.com/company/ieee-vbit-sb',
    'https://whatsapp.com/channel/0029Vb6F16ALdQekr3hPVz3D',
    'https://vbithyd.ac.in/ieee-student-branch-of-vbit/'
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}