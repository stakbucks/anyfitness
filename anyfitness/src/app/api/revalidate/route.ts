import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function POST(request: NextRequest) {
  revalidatePath('/products');

  return Response.json({ revalidated: true, now: Date.now() });
}
