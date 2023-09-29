import { IBrand } from '../Brands';
import ExamplePhoto from './ExamplePhoto/ExamplePhoto';
import { monsterrat } from '../../../../app/layout';
import DiscoverBlackBtn from '@/UI/Buttons/DiscoverBlackBtn';

type Props = {
  brand: IBrand;
};

export default function Brand({ brand }: Props) {
  const { name, link, img, description } = brand;
  return (
    <li
      className={`w-screen text-theme-B xl:flex  ${
        name === 'DIAMOND' && 'xl:flex-row-reverse'
      }`}
    >
      <ExamplePhoto img={img} isDiamond={name === 'DIAMOND'} />
      <div className=" sp:w-[439px] xl:w-[360px] sp:ml-[102px] xl:ml-[48px] sp:mr-[324px] xl:mr-[75px] mx-[24px]">
        <h3
          className={`${monsterrat.className}  xl:text-ENG-lg-H2 text-ENG-sm-H1 xl:mt-[60px] mt-[24px]`}
        >
          {name}
        </h3>
        <p className="xl:mt-[24px] sp:mb-[48px] xl:mb-[40px] mt-[16px] mb-[16px] text-theme-G6 sp:text-KOR-lg-H5 xl:text-KOR-lg-B1 text-KOR-sm-B2">
          {description}
        </p>
        <DiscoverBlackBtn to={link} />
      </div>
    </li>
  );
}
