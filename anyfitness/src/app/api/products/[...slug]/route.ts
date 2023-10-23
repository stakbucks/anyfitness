import { getProductsByCategory } from '@/service/products';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    slug: [type: string, category: string];
  };
};

export async function GET(request: Request, { params: { slug } }: Props) {
  const [type, category] = slug;
  try {
    const data = await getProductsByCategory(type, category);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
