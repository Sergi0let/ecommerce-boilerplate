export const seoMeta = {
	metaTitle:
		'HYDRA BOOST — зволожуючий крем для обличчя з гіалуроновою кислотою',
	metaDescription:
		'Легкий зволожуючий крем HYDRA BOOST з гіалуроновою кислотою та алое вера. Ідеальний для сухої та комбінованої шкіри. Купити онлайн з доставкою по Україні.',
	metaKeywords: [
		'зволожуючий крем',
		'гіалуронова кислота крем',
		'догляд за обличчям',
		'крем для сухої шкіри',
		'eco skincare',
		'гіпоалергенна косметика',
	],
	structuredDataJsonLd: `
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "HYDRA BOOST — зволожуючий крем для обличчя",
      "image": [
        "https://example.com/products/hydra-boost/1.jpg"
      ],
      "description": "Легкий зволожуючий крем HYDRA BOOST з гіалуроновою кислотою та алое вера. Ідеальний для сухої та комбінованої шкіри.",
      "sku": "ES-HB-50",
      "brand": {
        "@type": "Brand",
        "name": "EcoSkin"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/product/zvolozhuyuchiy-krem-hydra-boost",
        "priceCurrency": "UAH",
        "price": "379",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "89"
      }
    }
  `.trim(),
};

/*
🧩 Як використати:
 - metaTitle, metaDescription, metaKeywords — у <head> або через next/head.

 - structuredDataJsonLd — вставляєш як <script type="application/ld+json">.
*/
