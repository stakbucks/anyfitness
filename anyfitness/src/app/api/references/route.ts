import { getReferences } from '@/service/references';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await getReferences();
  return NextResponse.json(data);
}
