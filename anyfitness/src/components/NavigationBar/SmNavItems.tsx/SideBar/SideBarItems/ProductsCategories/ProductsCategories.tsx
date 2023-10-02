import ArrowUpIcon from '@/UI/Icons/ArrowUpIcon';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

const categories = [
  {
    name: '근력운동기구',
    link: '/weight/bts',
  },
  {
    name: '유산소운동기구',
    link: '/cardio/home',
  },
  {
    name: '야외운동기구',
    link: '/outdoor/400',
  },
];

export default function ProductsCategories({ setIsSideBarOpen }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleClick = () => setDropdownOpen((prev) => !prev);
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between items-center pr-[5px]">
        <span onClick={handleClick} className="cursor-pointer">
          제품소개
        </span>
        <button>
          <ArrowUpIcon onClick={handleClick} dropdownOpen={dropdownOpen} />
        </button>
      </div>
      {dropdownOpen &&
        categories.map(({ name, link }, idx) => (
          <Link
            onClick={() => setIsSideBarOpen(false)}
            key={idx}
            className="text-KOR-sm-B4"
            href={link}
          >
            {name}
          </Link>
        ))}
    </div>
  );
}
