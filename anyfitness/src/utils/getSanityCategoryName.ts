import {
  IProductCategories,
  IProductCategories_Sanity,
} from '@/interface/product';

// sanity에서 사용한 카테고리(분류) 이름으로 변환
export const getSanityCategoryName: (
  category: IProductCategories
) => IProductCategories_Sanity = (category) => {
  switch (category) {
    case 'bts':
      return 'BTS 시리즈';
    case 'diamond':
      return 'DIAMOND 시리즈';
    case 'free':
      return '프리웨이트';
    case 'aseries':
      return '장애인용 A 시리즈';
    case 'home':
      return '가정용 런닝머신';
    case 'club':
      return '클럽용 런닝머신';
    case 'cycle':
      return '헬스 자전거';
    case '400':
      return '400 series';
    case '300':
      return '300 series';
    case '200':
      return '200 series';
    case '600':
      return '600 series';
  }
};
