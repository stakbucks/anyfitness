import { getProductById } from '@/service/product';
import { NextResponse } from 'next/server';

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  try {
    const data = await getProductById(id);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
