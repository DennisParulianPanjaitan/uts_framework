"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      // Simpan token
      localStorage.setItem("token", data.token);

      // Redirect ke dashboard
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Terjadi kesalahan.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-7", className)} {...props}>
      <div className="flex flex-col items-start gap-2 text-left">
        <h1 className="text-4xl font-medium">Selamat Datang!</h1>
        <p className="text-lg text-muted-foreground">
          Selamat datang di HRIS CMLABS!
        </p>
      </div>

      <div className="grid gap-5">
        
        {/* <div className="flex flex-row gap-2">
          <div className="grid gap-2 flex-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" type="text" placeholder="Pietro" required />
          </div>
          <div className="grid gap-2 flex-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" type="text" placeholder="Schirano" required />
          </div>
        </div> */}

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Konfirmasi password"
            required
          />
        </div> */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          type="submit"
          size="lg"
          className="gap-4 bg-[var(--color-primary-900)] text-white hover:bg-[var(--color-primary-800)]"
        >
          Login
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button variant="outline" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M23.06 12.25C23.06 11.47 22.99 10.72 22.86 10H12.5V14.255H18.42C18.165 15.63 17.39 16.795 16.225 17.575V20.335H19.78C21.86 18.42 23.06 15.6 23.06 12.25Z"
              fill="#4285F4"
            />
            <path
              d="M12.4999 23C15.4699 23 17.9599 22.015 19.7799 20.335L16.2249 17.575C15.2399 18.235 13.9799 18.625 12.4999 18.625C9.63492 18.625 7.20992 16.69 6.34492 14.09H2.66992V16.94C4.47992 20.535 8.19992 23 12.4999 23Z"
              fill="#34A853"
            />
            <path
              d="M6.345 14.09C6.125 13.43 6 12.725 6 12C6 11.275 6.125 10.57 6.345 9.91V7.06H2.67C1.9 8.59286 1.49932 10.2846 1.5 12C1.5 13.775 1.925 15.455 2.67 16.94L6.345 14.09Z"
              fill="#FBBC05"
            />
            <path
              d="M12.4999 5.375C14.1149 5.375 15.5649 5.93 16.7049 7.02L19.8599 3.865C17.9549 2.09 15.4649 1 12.4999 1C8.19992 1 4.47992 3.465 2.66992 7.06L6.34492 9.91C7.20992 7.31 9.63492 5.375 12.4999 5.375Z"
              fill="#EA4335"
            />
          </svg>
          Login with Google
        </Button>
      </div>

      <div className="text-center text-sm">
        Belum punya akun?{" "}
        <a href="#" className="underline underline-offset-4">
          Daftar Sekarang
        </a>
      </div>
    </form>
  );
}
