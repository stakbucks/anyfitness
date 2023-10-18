import { getReferenceById } from '@/service/references';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type Props = {
  params: { id: string };
};

export async function GET(request: Request, { params: { id } }: Props) {
  const data = await getReferenceById(id);
  return NextResponse.json(data);
}
