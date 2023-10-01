import { getFacilities } from '@/service/facilities';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getFacilities();
  return NextResponse.json(data);
}
