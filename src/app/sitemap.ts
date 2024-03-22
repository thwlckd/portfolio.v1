import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hyub.xyz',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
