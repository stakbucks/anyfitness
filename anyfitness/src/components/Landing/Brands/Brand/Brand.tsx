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
      <div className="xl:max-w-[360px] xl:ml-[48px] xl:mr-[60px] mx-[24px]">
        <h3 className={`${monsterrat.className} text-ENG-sm-H1 mt-[24px]`}>
          {name}
        </h3>
        <p className=" my-[16px] text-theme-G6 text-KOR-sm-B2">{description}</p>
        <DiscoverBlackBtn to={link} />
      </div>
    </li>
  );
}
