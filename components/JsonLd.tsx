import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AmusementPark",
    name: site.fullName,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    image: `${site.url}/images/park.jpg`,
    logo: `${site.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.place}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.lat,
      longitude: site.lng,
    },
    openingHours: "Mo-Su 13:00-21:00",
    sameAs: [site.facebook, site.instagram],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
