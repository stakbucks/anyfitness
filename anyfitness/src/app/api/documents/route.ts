import { getDocs } from '@/service/docs';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getDocs();
  return NextResponse.json(data);
}
