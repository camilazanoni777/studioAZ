import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Arquitetura e Interiores`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Studio Andrea Zanoni",
    "Andrea Zanoni arquiteta",
    "arquitetura residencial",
    "interiores de alto padrão",
    "consultoria de arquitetura",
    "reformas residenciais",
    "arquitetura Brasília",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Arquitetura e Interiores`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/hero-interior.png`,
        width: 1200,
        height: 800,
        alt: "Interior sofisticado em tons neutros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Arquitetura e Interiores`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/hero-interior.png`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/images/hero-interior.png`,
          width: 1200,
          height: 800,
          alt: "Projeto residencial sofisticado em tons neutros",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [`${siteConfig.url}/images/hero-interior.png`],
    },
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "Architect"],
    "@id": `${siteConfig.url}/#studio`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero-interior.png`,
    telephone: siteConfig.whatsappDisplay,
    email: siteConfig.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressPlaceholder,
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Brasília e atendimento remoto sob consulta",
      },
    ],
    sameAs: [`https://instagram.com/${siteConfig.instagram}`],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappDisplay,
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
    },
  };
}
