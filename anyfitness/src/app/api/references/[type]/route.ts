import { ReferenceTypes } from '@/interface/references';
import { getReferencesByType } from '@/service/references';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export type Props = {
  params: {
    type: ReferenceTypes;
  };
};

function convertTypeToKor(type: ReferenceTypes) {
  switch (type) {
    case ReferenceTypes.WEIGHT:
      return '웨이트';
    case ReferenceTypes.OUTDOOR:
      return '야외기구';
    case ReferenceTypes.EXHIBITION:
      return '전시회';
  }
}

export async function GET(request: Request, { params: { type } }: Props) {
  const data = await getReferencesByType(convertTypeToKor(type));
  return NextResponse.json(data);
}
