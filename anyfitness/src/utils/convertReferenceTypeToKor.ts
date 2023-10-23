import { ReferenceTypes } from '@/interface/references';

export function convertReferenceTypeToKor(type: ReferenceTypes) {
  switch (type) {
    case ReferenceTypes.WEIGHT:
      return '웨이트';
    case ReferenceTypes.OUTDOOR:
      return '야외기구';
    case ReferenceTypes.EXHIBITION:
      return '전시회';
  }
}
