import { ICardioCategories, ICardioCategories_Sanity } from './cardio';
import { IOutdoorCategories, IOutdoorCategories_Sanity } from './outdoor';
import { IWeightCategories, IWeightCategories_Sanity } from './weight';

// 제품 소개 페이지 api 인터페이스
export interface ISimpleProduct {
  id: string;
  name: string;
  image: string;
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
