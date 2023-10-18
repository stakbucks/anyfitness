export type INavItem = {
  name: string;
  link: string;
};

export const navItems: INavItem[] = [
  { name: '회사소개', link: '/intro' },
  { name: '제품소개', link: '/products/weight/bts' },
  { name: '납품사례', link: '/references/weight' },
  { name: '자료실', link: '/docs' },
  { name: '쇼핑몰', link: 'http://www.anyfitnessmall.co.kr/' },
];
