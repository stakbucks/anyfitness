import { getCertificates } from '@/service/certificates';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getCertificates();
  return NextResponse.json(data);
}
