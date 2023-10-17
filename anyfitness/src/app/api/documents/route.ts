import { getDocuments } from '@/service/docs';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await getDocuments();
  return NextResponse.json(data);
}
