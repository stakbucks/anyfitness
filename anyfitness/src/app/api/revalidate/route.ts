import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  revalidatePath('/');

  return Response.json({ revalidated: true, now: Date.now() });
}
