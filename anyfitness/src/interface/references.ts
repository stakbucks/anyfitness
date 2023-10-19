export enum ReferenceTypes {
  WEIGHT = 'weight',
  OUTDOOR = 'outdoor',
  EXHIBITION = 'exhibition',
}

export interface ISimpleReference {
  id: string;
  type: ReferenceTypes;
  name: string;
  image: string;
}

export interface IDetailReference {
  id: string;
  name: string;
  type: ReferenceTypes;
  date: string;
  images: string[];
}
