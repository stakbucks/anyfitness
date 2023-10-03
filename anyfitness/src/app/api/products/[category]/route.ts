import { getProductsByCategory } from '@/service/products';
import { NextResponse } from 'next/server';

type Props = {
  params: {
    category: string;
  };
};

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const data = await getProductsByCategory(params.category);
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
