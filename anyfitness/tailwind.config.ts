import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      md: '390px', // 768-390
      lg: '768px', // 1024-768
      sp: '1520px', // 랜딩페이지용 특수 브레이크 포인트
      xl: '1024px', // 1960-1024
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      B: '#33333',
      G6: '#60606',
      G5: '#7C7C7C',
      G4: '#97979',
      G3: '#D9D9D',
      G2: '#E0E0E',
      G1: '#F5F5F5',
      BLUE: '#1352A3',
      RED: '#EC1C24',
      W: '#FFFFF',
      IMGBG: '#F9F9F',
      FOOTER: '#EFEFE',
    },
    fontSize: {
      'KOR-lg-H': [
        '40px',
        {
          lineHeight: '1',
          fontWeight: 700,
        },
      ],
      'KOR-lg-H0': [
        '36px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'KOR-lg-H1': [
        '24px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'KOR-lg-H2': [
        '20px',
        {
          lineHeight: '1.4',
          fontWeight: 800,
        },
      ],
      'KOR-lg-H3': [
        '20px',
        {
          lineHeight: '1.2',
          fontWeight: 700,
          letterSpacing: '0.4px',
        },
      ],
      'KOR-lg-H4': [
        '18px',
        {
          lineHeight: '1.2',
          fontWeight: 600,
        },
      ],
      'KOR-lg-H5': [
        '18px',
        {
          lineHeight: '1.6',
          fontWeight: 400,
        },
      ],
      'KOR-lg-B1': [
        '16px',
        {
          lineHeight: '1.6',
          fontWeight: 300,
        },
      ],
      'KOR-lg-B2': [
        '16px',
        {
          lineHeight: '1.8',
          fontWeight: 400,
        },
      ],
      'KOR-lg-B3': [
        '16px',
        {
          lineHeight: '1.8',
          fontWeight: 500,
        },
      ],
      'KOR-lg-B4': [
        '16px',
        {
          lineHeight: '1.6',
          fontWeight: 600,
        },
      ],
      'KOR-lg-B5': [
        '16px',
        {
          lineHeight: '1.6',
          fontWeight: 700,
        },
      ],
      'KOR-lg-C1': [
        '14px',
        {
          lineHeight: '1.8',
          fontWeight: 300,
        },
      ],
      'ENG-lg-H0': [
        '56px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'ENG-lg-H1': [
        '40px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'ENG-lg-H2': [
        '36px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'ENG-lg-H3': [
        '20px',
        {
          lineHeight: '1.5',
          fontWeight: 600,
        },
      ],
      'ENG-lg-H4': [
        '18px',
        {
          lineHeight: '1.5',
          fontWeight: 600,
        },
      ],
      'ENG-lg-B1': [
        '16px',
        {
          lineHeight: '1.4',
          fontWeight: 500,
        },
      ],
      'ENG-lg-C1': [
        '14px',
        {
          lineHeight: '1.6',
          fontWeight: 700,
        },
      ],
      'ENG-lg-C2': [
        '14px',
        {
          lineHeight: '1.2',
          fontWeight: 500,
        },
      ],
      'KOR-sm-H0': [
        '32px',
        {
          lineHeight: '1',
          fontWeight: 700,
        },
      ],
      'KOR-sm-H1': [
        '24px',
        {
          lineHeight: '1.4',
          fontWeight: 700,
        },
      ],
      'KOR-sm-H2': [
        '20px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'KOR-sm-H3': [
        '20px',
        {
          lineHeight: '1.2',
          fontWeight: 700,
          letterSpacing: '0.4px',
        },
      ],
      'KOR-sm-H4': [
        '18px',
        {
          lineHeight: '1.4',
          fontWeight: 700,
        },
      ],
      'KOR-sm-B2': [
        '16px',
        {
          lineHeight: '1.6',
          fontWeight: 400,
        },
      ],
      'KOR-sm-B4': [
        '16px',
        {
          lineHeight: '1.6',
          fontWeight: 600,
        },
      ],
      'KOR-sm-C1': [
        '14px',
        {
          lineHeight: '1.8',
          fontWeight: 300,
        },
      ],
      'KOR-sm-C2': [
        '14px',
        {
          lineHeight: '1.6',
          fontWeight: 400,
        },
      ],
      'KOR-sm-C3': [
        '14px',
        {
          lineHeight: '1.8',
          fontWeight: 500,
        },
      ],
      'KOR-sm-C4': [
        '14px',
        {
          lineHeight: '1.6',
          fontWeight: 600,
        },
      ],
      'KOR-sm-C5': [
        '14px',
        {
          lineHeight: '1.8',
          fontWeight: 700,
        },
      ],
      'ENG-sm-H0': [
        '28px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'ENG-sm-H1': [
        '24px',
        {
          lineHeight: '1.2',
          fontWeight: 800,
        },
      ],
      'ENG-sm-C3': [
        '14px',
        {
          lineHeight: '1.4',
          fontWeight: 500,
        },
      ],
      'ENG-sm-C2': [
        '14px',
        {
          lineHeight: '1.5',
          fontWeight: 600,
        },
      ],
      'ENG-sm-C1': [
        '14px',
        {
          lineHeight: '1.6',
          fontWeight: 700,
        },
      ],
    },
    plugins: [],
  },
};
export default config;
