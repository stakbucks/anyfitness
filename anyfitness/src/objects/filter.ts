type IProductsType = 'weight' | 'cardio' | 'outdoor';

type IFilterItem = {
  type: IProductsType;
  name: string;
  link: string;
};

export const filter = [{}];
