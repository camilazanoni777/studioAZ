import { businessJsonLd } from "@/lib/seo";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessJsonLd()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
