
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const cormorant = Cormorant_Garamond({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Sri Guru Akkasamy Velammal School | Bhadragiri, Avadi',
  description: 'Sri Guru Akkasamy Velammal School in Bhadragiri, Chikmangalore, Avadi offers a grounded, community-focused matriculation education for every student.',
  keywords: ['Sri Guru Akkasamy Velammal School', 'Bhadragiri Avadi school', 'matriculation school Avadi'],
  alternates: {
    canonical: 'https://sriguruakkasamy.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'Sri Guru Akkasamy Velammal School',
  url: 'https://sriguruakkasamy.edu.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bhadragiri, Chikmangalore',
    addressLocality: 'Avadi',
    addressRegion: 'Tamil Nadu',
    postalCode: '600072',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.09791,
    longitude: 80.06741,
  },
  hasMap: 'https://maps.google.com/?q=13.09791,80.06741',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#FFFBEB] text-[#57534E] antialiased min-h-screen">
        <SmoothScrollProvider>
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
              </SmoothScrollProvider>
</body>
    </html>
  );
}