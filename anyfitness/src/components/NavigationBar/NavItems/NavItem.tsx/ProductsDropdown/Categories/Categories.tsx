import Category from './Category/Category';

type Props = {
  onMouseEnter(): void;
  onMouseLeave(): void;
};

export type ICategory = {
  category: string;
  items: {
    name: string;
    link: string;
  }[];
};

const categories: ICategory[] = [
  {
    category: '근력운동기구',
    items: [
      {
        name: 'BTS시리즈',
        link: '/products/weight/bts',
      },
      {
        name: 'DIAMOND시리즈',
        link: '/products/weight/diamond',
      },
      {
        name: '프리웨이트',
        link: '/products/weight/free',
      },
      {
        name: '장애인용 A시리즈',
        link: '/products/weight/disabled',
      },
    ],
  },
  {
    category: '유산소운동기구',
    items: [
      {
        name: '가정용 런닝머신',
        link: '/products/cardio/home',
      },
      {
        name: '클럽용 런닝머신',
        link: '/products/cardio/club',
      },
      {
        name: '헬스자전거',
        link: '/products/cardio/cycle',
      },
    ],
  },
  {
    category: '야외운동기구',
    items: [
      {
        name: '400 series',
        link: '/products/outdoor/400',
      },
      {
        name: '300 series',
        link: '/products/outdoor/300',
      },
      {
        name: '200 series',
        link: '/products/outdoor/200',
      },
      {
        name: '600 series',
        link: '/products/outdoor/600',
      },
    ],
  },
];

export default function Categories({ onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute  w-auto h-auto top-[55px] left-0  pt-[12px] pb-[20px] grid grid-cols-3 gap-[15.5px]"
    >
      {categories.map((category, idx) => (
        <Category
          key={idx}
          category={category}
          isLast={idx === categories.length - 1}
        />
      ))}
    </div>
  );
}
