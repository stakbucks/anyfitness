export type IWeightCategories = 'bts' | 'diamond' | 'free' | 'aseries';

export type IWeightCategories_KOR =
  | 'BTS 시리즈'
  | 'DIAMOND 시리즈'
  | '프리웨이트'
  | '장애인용 A 시리즈';

export interface ISimpleWeight {
  id: string;
  name: string;
  image: string;
}
