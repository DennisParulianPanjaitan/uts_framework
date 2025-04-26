import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/ui/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1408px] mx-auto gap-1">
      <div className="hidden lg:block w-[621px] bg-white relative">
        <div className="p-4 h-screen">
          <img
            src="/images/gambar-auth.png"
            alt="Deskripsi gambar"
            className="absolute inset-4 h-[calc(100%-32px)] w-[calc(100%-32px)] object-cover dark:brightness-[0.2] dark:grayscale rounded-xl"
          />
          <div className="absolute inset-4 flex flex-col items-start justify-end gap-2 p-4">
            <p className="text-xl text-white text-left">
              “Setelah menggunakan HRIS cmlabs, proses administrasi karyawan
              jadi jauh lebih efisien. Kami bisa hemat waktu hingga 40% setiap
              bulannya hanya dari otomatisasi absensi dan payroll.”
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-md text-muted text-left">Diana Monroe</p>
              <div className="rounded-xl h-[6px] w-[6px] bg-muted"></div>
              <p className="text-md text-muted text-left">HR di PT. Indonesia Sejahtera</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-6 md:p-10 w-full lg:w-[783px]">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
