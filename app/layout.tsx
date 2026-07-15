import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tarbhaindustries.in"),
  alternates: { canonical: "/" },
  title: "Tarbha Industries — Iron & Steel Fabrication in Raipur",
  description:
    "Custom mild steel fabrication in Raipur with 25+ years of experience: heavy-duty clamps, electric poles, chambers, grills, street light brackets, hoarding frames and custom MS works. Serving Chhattisgarh, Odisha, Maharashtra, Rajasthan and Madhya Pradesh.",
  keywords: [
    "fabrication Raipur",
    "MS fabrication",
    "iron fabrication",
    "heavy duty clamps",
    "electric poles",
    "hoarding frames",
    "Tarbha Industries",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tarbha Industries",
  url: "https://www.tarbhaindustries.in",
  description:
    "Custom mild steel fabrication with 25+ years of experience — heavy-duty clamps, electric poles, chambers, grills, hoarding frames and custom MS components.",
  telephone: "+917509115513",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Station Road",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  areaServed: [
    "Chhattisgarh",
    "Odisha",
    "Maharashtra",
    "Rajasthan",
    "Madhya Pradesh",
  ],
  openingHours: "Mo-Sa 09:00-19:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
