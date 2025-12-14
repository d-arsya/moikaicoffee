import Image from "next/image";
import Foto from "../../../public/front-jumbotron.jpg";
import Logo from "../../../public/logo-square.jpg";
import Link from "next/link";
import { Globe, Instagram, Music2, Phone } from "lucide-react";
import { FaGlobe, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
export default function Jumbotron() {
  return (
    <header className="relative w-full overflow-hidden rounded-t-lg">
      <div className="relative h-[70vw] max-h-[360px] w-full">
        <Image
          src={Foto}
          alt="Profile background"
          fill
          className="object-cover"
        />

        {/* Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>
      <div className="relative z-10 -mt-15 flex flex-col items-center px-6 pb-6 text-center">
        <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-black shadow-lg">
          <Image
            src={Logo}
            alt="Profile avatar"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        <h1 className="mt-4 text-xl font-semibold text-white">@moikaicoffee</h1>
        <h1 className="mt-4 text-sm font-medium text-white my-2">
          JAPANESE VINTAGE COFFEE PLACE
        </h1>

        <div className="mt-3 flex flex-row gap-x-3">
          <Link href={"https://instagram.com/moikaicoffee"}>
            <FaInstagram size={32} />
          </Link>
          <Link href={""}>
            <FaWhatsapp size={30} />
          </Link>
          <Link href={"https://tiktok.com/@moikaicoffee"}>
            <FaTiktok size={28} />
          </Link>
          <Link href={"/landingpage"}>
            <FaGlobe size={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}
