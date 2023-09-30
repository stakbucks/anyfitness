import Image from 'next/image';
import AnyfitnessText from '../../../../public/intro/Anyfitness_Intro.svg';
import SloganText from '../../../../public/intro/sloganText.svg';
import DescriptionEquipment from '../../../../public/intro/descriptionEquipment.png';

export default function Description() {
  return (
    <section className="xl:w-[900px] xl:px-0 w-full px-[24px] xl:my-[100px] my-[36px] xl:flex xl:gap-[53px]">
      <div className="flex flex-col">
        <Image
          alt="anyfitness"
          src={AnyfitnessText}
          width={320}
          height={60}
          className="xl:w-[320px] xl:h-[60px] w-[192px] h-[36px] xl:mb-[12px] mb-[8px]"
        />
        <Image
          alt="Your Health Starts Here"
          src={SloganText}
          width={319}
          height={26}
          className="xl:w-[319px] xl:h-[26px] w-[197px] h-[16px]"
        />
        <div className="text-theme-G6 xl:text-KOR-lg-B3 text-KOR-sm-C3 xl:mt-[32px] mt-[24px] xl:w-[427px] w-full">
          <p>
            저희 (주)애니휘트니스는 1996년 설립 이후,
            <br />
            건강과 행복, 아름다움을 추구하는 웰빙 라이프스타일을 만들고자
            혁신적인 제품, 우수한 성능 및 세련된 디자인 개발에 노력해왔습니다.
          </p>
          <br />
          <p>
            저희 제품의 우수성은 각종 국제전시회에 참가하면서 세계 각국의
            바이어들에게도 인정받았습니다.
          </p>
          <br />
          <p>
            ‘MADE IN KOREA’의 위상을 걸고 저희 (주)애니휘트니스는 고객 만족을
            위해 최고의 상품과 서비스 제공에 주력할것을 약속하며, 고객만족을
            최우선 가치로 삼아, 항상 창조적인 기업이 되겠습니다.
          </p>
        </div>
      </div>
      <Image
        alt="대표사진"
        src={DescriptionEquipment}
        width={450}
        height={460}
        className="xl:w-[450px] xl:h-[460px] xl:block hidden"
      />
    </section>
  );
}
