"use server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import api from "@/utils/api";

export async function GET() {
  const token = cookies().get("token");
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(
      token.value,
      process.env.JWT_SECRET as string
    ) as { username: string; userId: string; isAdmin: boolean };
    return NextResponse.json(
      {
        username: decoded.username,
        userId: decoded.userId,
        isAdmin: decoded.isAdmin,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
