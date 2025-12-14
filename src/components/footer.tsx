import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoMoikai from "../../public/logo-square.jpg";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary p-4 md:py-12 md:px-24 text-black text-sm font-light">
      <div className="flex flex-col md:flex-row gap-x-24 gap-y-6 md:gap-y-0">
        <div className="block">
          <Link href={"/"}>
            <Image
              alt="Logo Moikai Coffee"
              src={LogoMoikai}
              className="w-1/4 md:w-32 border border-1 border-black rounded-md"
            />
          </Link>
          <h1 id="contact" className="font-bold text-md mt-6 mb-3">
            Informasi Kontak
          </h1>
          <div className="flex flex-row gap-x-3 mb-6">
            <Link
              href={"https://instagram.com/moikaicoffee"}
              className="bg-black rounded-md p-2 flex w-max"
            >
              <FaInstagram size={16} className="text-primary" />
            </Link>
            <Link
              href={"https://tiktok.com/@moikaicoffee"}
              className="bg-black rounded-md p-2 flex w-max"
            >
              <FaTiktok size={16} className="text-primary" />
            </Link>
            <Link
              href={"https://wa.me/6282329545244"}
              className="bg-black rounded-md p-2 flex w-max"
            >
              <FaWhatsapp size={16} className="text-primary" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg mb-3">Tautan Cepat</h1>
          <div className="flex flex-col gap-y-1.5">
            <Link href={"#about"}>Tentang Kami</Link>
            <Link href={"#menu"}>Menu Moikai</Link>
            <Link href={"#promo"}>Penawaran Spesial Untuk Anda</Link>
            <Link href={"#locations"}>Temukan Lokasi Moikai</Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 mb-12 col-span-2">
          <h1 className="font-bold text-lg">Kunjungi Cabang Kami</h1>
          <div className="flex flex-col md:flex-row gap-x-24 gap-y-3 md:gap-y-0">
            <div className="flex flex-col gap-y-3">
              <h1 className="font-bold text-md">Cabang CDT</h1>
              <Link
                href={"https://maps.app.goo.gl/P1nqV8QxZNYhZCgc7"}
                className="flex flex-row gap-2"
              >
                <MapPin size={20} /> Jl. Cik Di Tiro No.27 Terban YK
              </Link>
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
              <Link
                href={"https://maps.app.goo.gl/57H7io4MLcwriVav5"}
                className="flex flex-row gap-2"
              >
                <MapPin size={20} /> Jl. Taman Siswa No.27C Wirogunan YK
              </Link>
              <div className="flex flex-row gap-2">
                <Clock size={20} />
                <span>
                  <p>Senin - Minggu</p>
                  <p className="mt-1">Pukul 09.00 - 22.00 WIB</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full m-auto" />
      <p className="mt-6">© 2025 Moikai. Semua hak dilindungi. </p>
    </footer>
  );
}
