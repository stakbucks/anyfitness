export enum DocTypes {
  CATALOG = '카다로그',
  GUIDE = '가이드',
}

export interface IDoc {
  id: string;
  title: string;
  type: DocTypes;
  url: string;
}

export interface IDocs {
  catalog: IDoc[];
  guide: IDoc[];
}
