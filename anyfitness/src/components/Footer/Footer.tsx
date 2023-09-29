import Image from 'next/image';
import Logo from '../../../public/logo.png';
import { monsterrat } from '@/app/layout';
import LocationIcon from '@/UI/Icons/LocationIcon';
import CallIcon from '@/UI/Icons/CallIcon';
import FaxIcon from '@/UI/Icons/FaxIcon';
import MailIcon from '@/UI/Icons/MailIcon';

const ABOUT_US_TEXT =
  '‘MADE IN KOREA’의 위상을 걸고 저희 애니휘트니스는 고객 만족을 위해 최고의 상품과 서비스 제공에 주력할 것을 약속하며 고객만족을 최우선 가치로 삼아 항상 창조적인 기업이 되겠습니다.';
const COPYRIGHT_TEXT = '© 2022 ANYFITNESS. ALL RIGHTS RESERVED.';
const contactItems = [
  {
    icon: <LocationIcon />,
    description: '경기도 광주시 초월읍 학동리 138-3 (주)애니휘트니스',
  },
  {
    icon: <CallIcon />,
    description: '031-762-9015',
  },
  {
    icon: <FaxIcon />,
    description: '031-762-9018',
  },
  {
    icon: <MailIcon />,
    description: 'any2121@hanmail.net',
  },
];

export default function Footer() {
  return (
    <footer className=" w-screen h-auto xl:px-[40px] px-[24px] py-[40px] mt-[87px]  bg-theme-FOOTER flex xl:justify-center">
      <div className="relative xl:flex xl:flex-row xl:justify-between flex flex-col xl:pb-[35px] xl:w-full xl:max-w-[1424px]">
        <Image
          alt="로고"
          src={Logo}
          width={162}
          height={60}
          className="w-[162px] h-[60px]"
        />
        <section className="flex xl:flex-row flex-col xl:gap-[48px]">
          <div className="flex flex-col xl:w-[315px] pr-[10px] max-w-[600px]">
            <h2
              className={`${monsterrat.className} xl:mt-0 mt-[24px] text-theme-B text-ENG-sm-C1`}
            >
              ABOUT US
            </h2>
            <div className="w-[50px] h-[2px] my-[16px] bg-theme-G4" />
            <p className="text-theme-G6 text-KOR-sm-C1">{ABOUT_US_TEXT}</p>
          </div>
          <div className="flex flex-col xl:w-[325px] w-auto">
            <h2
              className={`${monsterrat.className} xl:mt-0 mt-[24px] text-theme-B text-ENG-sm-C1`}
            >
              CONTACT US
            </h2>
            <div className="w-[50px] h-[2px] my-[16px] bg-theme-G4" />
            <ul>
              {contactItems.map(({ icon, description }, idx) => (
                <li
                  className="flex items-center text-theme-G6 text-KOR-sm-C1 gap-[10px]"
                  key={idx}
                >
                  {icon} <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
          <span
            className={`${monsterrat.className} xl:absolute xl:left-0 xl:bottom-[-15px] text-theme-G4 text-ENG-sm-C2`}
          >
            {COPYRIGHT_TEXT}
          </span>
        </section>
      </div>
    </footer>
  );
}
