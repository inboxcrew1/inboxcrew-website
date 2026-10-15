import { SEOServicePage } from './seoTypes';
import { SEO_PAGES_GROUP_A } from './seoPagesGroupA';
import { SEO_PAGES_GROUP_B } from './seoPagesGroupB';
import { SEO_PAGES_GROUP_C } from './seoPagesGroupC';
import { SEO_PAGES_GROUP_D } from './seoPagesGroupD';

export * from './seoTypes';
export { SEO_PAGES_GROUP_A } from './seoPagesGroupA';
export { SEO_PAGES_GROUP_B } from './seoPagesGroupB';
export { SEO_PAGES_GROUP_C } from './seoPagesGroupC';
export { SEO_PAGES_GROUP_D } from './seoPagesGroupD';

// Complete 39 Sub-pages (Page 1 is Homepage `/`)
export const SEO_PAGES_DATA: SEOServicePage[] = [
  ...SEO_PAGES_GROUP_A,
  ...SEO_PAGES_GROUP_B,
  ...SEO_PAGES_GROUP_C,
  ...SEO_PAGES_GROUP_D,
];

export function getSEOPageBySlug(slug: string): SEOServicePage | undefined {
  return SEO_PAGES_DATA.find((page) => page.slug === slug);
}

export function getRelatedPages(slugs: string[]): SEOServicePage[] {
  return SEO_PAGES_DATA.filter((page) => slugs.includes(page.slug));
}
