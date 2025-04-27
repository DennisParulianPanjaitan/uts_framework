import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Dummy data user
const users = [
  { email: "admin@gmail.com", password: "admin123" },
  { email: "user@gmail.com", password: "user123" },
];

// Secret key untuk JWT
const SECRET_KEY = "secretkeykamu";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Cari user
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ message: "Email atau Password salah" }, { status: 401 });
  }

  // Buat token
  const token = jwt.sign(
    { email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" } // Token berlaku 1 jam
  );

  // Kirim token ke frontend
  return NextResponse.json({ token });
}
