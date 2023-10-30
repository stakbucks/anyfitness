import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://anyfitness.co.kr';
  return [
    {
      url: 'https://anyfitness.co.kr',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://anyfitness.co.kr/intro',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://anyfitness.co.kr/products',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
