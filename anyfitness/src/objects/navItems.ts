export type INavItem = {
  name: string;
  link: string;
  match: string | null;
};

export const navItems: INavItem[] = [
  { name: '회사소개', link: '/intro', match: 'intro' },
  { name: '제품소개', link: '/products/weight/bts', match: 'product' },
  { name: '납품사례', link: '/references/weight', match: 'reference' },
  { name: '자료실', link: '/docs', match: 'docs' },
  { name: '쇼핑몰', link: 'http://www.anyfitnessmall.co.kr/', match: null },
];
