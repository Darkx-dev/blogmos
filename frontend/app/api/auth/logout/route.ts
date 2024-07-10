import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  cookies().delete("token");
  return NextResponse.redirect(new URL("/", req.url))
}