import { ICardioCategories, ICardioCategories_Sanity } from './cardio';
import { IOutdoorCategories, IOutdoorCategories_Sanity } from './outdoor';
import { IWeightCategories, IWeightCategories_Sanity } from './weight';

// 제품 소개 페이지 api 인터페이스
export interface ISimpleProduct {
  id: string;
  name: string;
  image: string;
}

export interface IProductSpecification {
  // 웨이트
  size: string; // SIZE(mm) (규격)
  block_deviceWeight: string; // 블럭무게/기기중량
  frame: string; //프레임
  targetMuscles: string; // 단련근육 // . -> 사진
  targetBodyParts: string; //
  targetBodyPartsArr: string[]; // . -> 사진
  features: string[]; // (제품)특징 . -> 하단 1
  // 유산소
  sizeArr: string[]; // 규격
  motor: string; // 모터
  maxWieght: string; // 최대하중
  displayInfo: string; // 디스플레이정보
  incline: string; // 경사도
  runningArea: string; // 주행면적
  program: string; // 프로그램
  dualButtonHandle: string; // 손잡이 듀얼버튼
  weight: string; // 중량
  driveSystem: string; // 구동방식
  intensityLevels: string; // 운동강도
  cardioSystem: string; // 심박시스템
  powerSupply: string; // 전원공급
  maxWeightOfMan: string; // 허용몸무게
  // 야외
  age: string; // 사용연령
  method: string[]; // 사용방법 ->하단2
  effects: string[]; // 운동효과 ->하단3
}

// 제품 상세 페이지 api 인터페이스
export interface IDetailProduct {
  id: string;
  type: 'weightEq' | 'cardio' | 'outdoor';
  Category: IProductCategories_Sanity;
  name: string;
  image: string;
  specification: Partial<IProductSpecification>;
}

export type IProductCategories =
  | IWeightCategories
  | ICardioCategories
  | IOutdoorCategories;

// sanity에서 사용한 카테고리(분류) 이름
export type IProductCategories_Sanity =
  | IWeightCategories_Sanity
  | ICardioCategories_Sanity
  | IOutdoorCategories_Sanity;
