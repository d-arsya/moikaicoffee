import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoMoikai from "../../public/logo-square.jpg";

export default function Footer() {
  return (
    <footer className="bg-primary p-4 text-black text-sm font-light">
      <Image
        alt="Logo Moikai Coffee"
        src={LogoMoikai}
        className="w-1/4 border border-1 border-black rounded-md"
      />
      <h1 className="font-bold text-md mt-6 mb-3">Informasi Kontak</h1>
      <div className="flex flex-row gap-x-3 mb-6">
        <Link href={""} className="bg-black rounded-md p-2 flex w-max">
          <Instagram size={16} className="text-primary" />
        </Link>
        <Link href={""} className="bg-black rounded-md p-2 flex w-max">
          <Facebook size={16} className="text-primary" />
        </Link>
        <Link href={""} className="bg-black rounded-md p-2 flex w-max">
          <Phone size={16} className="text-primary" />
        </Link>
      </div>
      <div className="flex flex-col gap-y-6 mb-12">
        <div>
          <h1 className="font-bold text-lg my-3">Tautan Cepat</h1>
          <div className="flex flex-col gap-y-1.5">
            <Link href={""}>Tentang Kami</Link>
            <Link href={""}>Menu Moikai</Link>
            <Link href={""}>Penawaran Spesial Untuk Anda</Link>
            <Link href={""}>Temukan Lokasi Moikai</Link>
            <Link href={""}>Cari Tahu Lebih Banyak Tentang Kami</Link>
          </div>
        </div>
        <h1 className="font-bold text-lg">Kunjungi Cabang Kami</h1>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-md">Cabang CDT</h1>
          <div className="flex flex-row gap-2">
            <MapPin size={20} /> Jl. Cik Di Tiro No.27 Terban YK
          </div>
          <div className="flex flex-row gap-2">
            <Clock size={20} />
            <span>
              <p>Senin - Minggu</p>
              <p className="mt-1">Pukul 07.00 - 22.00 WIB</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-md">Cabang Tamsis</h1>
          <div className="flex flex-row gap-2">
            <MapPin size={20} /> Jl. Taman Siswa No.27C Wirogunan YK
          </div>
          <div className="flex flex-row gap-2">
            <Clock size={20} />
            <span>
              <p>Senin - Minggu</p>
              <p className="mt-1">Pukul 09.00 - 22.00 WIB</p>
            </span>
          </div>
        </div>
      </div>
      <hr className="w-80 m-auto" />
      <p className="mt-6">© 2025 Moikai. Semua hak dilindungi. </p>
    </footer>
  );
}
