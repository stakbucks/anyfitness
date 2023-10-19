export enum ReferenceTypes {
  WEIGHT = 'weight',
  OUTDOOR = 'outdoor',
  EXHIBITION = 'exhibition',
}

export interface ISimpleReference {
  id: string;
  name: string;
  image: string;
}

export interface IDetailReference {
  id: string;
  name: string;
  date: string;
  images: string[];
}
