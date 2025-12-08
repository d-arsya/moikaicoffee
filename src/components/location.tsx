import { Clock, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export default function Location() {
  return (
    <section>
      <div className="px-3 pb-6 pt-24">
        <h1 className="text-primary font-bold tracking-widest flex items-center gap-x-3">
          <span className="h-0.5 bg-white w-10 inline-block"></span>
          LOCATIONS
          <span className="h-0.5 bg-white w-10 inline-block"></span>
        </h1>
        <h1 className="font-bold text-2xl mt-3 mb-10">
          FIND <span className="text-primary">US</span>
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.1291370836148!2d110.3756152!3d-7.777798599999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59332dfcf31f%3A0xbbd22f76ee43e0b!2sMoikai%20Coffee%20CDT!5e1!3m2!1sid!2sid!4v1765195200416!5m2!1sid!2sid"
          style={{ border: 0 }}
          className="w-full h-64 rounded-md"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h1 className="font-extrabold text-3xl my-6">01</h1>
        <h1 className="text-primary font-semibold my-2">Main Branch</h1>
        <h1 className="font-bold text-xl">CABANG CDT</h1>
        <h1 className="my-3 bg-primary text-black p-2 rounded-md text-xs font-extrabold w-max tracking-widest">
          FOOD & DRINKS AVAILABLE
        </h1>
        <span className="flex gap-x-2 text-sm text-primary mt-3">
          <MapPin size={18} />
          <span>
            <h1 className="mb-2">ALAMAT</h1>
            <h1 className="font-semibold mb-2">
              Jl. Cik Di Tiro No. 27 Terban YK
            </h1>
          </span>
        </span>
        <span className="flex gap-x-2 text-sm mt-6 text-primary">
          <Clock size={18} />
          <span>
            <h1 className="mb-2">JAM</h1>
            <h1 className="font-semibold mb-2">07:00 - 22:00 WIB</h1>
            <h1>Senin - Minggu</h1>
          </span>
        </span>
        <Link
          href={""}
          className="bg-primary text-black text-sm flex gap-x-2 justify-center w-full p-3 rounded-md mt-12 font-bold tracking-widest"
        >
          <Navigation /> GET DIRECTIONS
        </Link>
      </div>
      <div className="bg-primary px-3 text-black py-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.885307189242!2d110.37803180000002!3d-7.805854299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57f414232bb5%3A0x570e82abd98c909d!2sMOIKAI%20Coffee%20Taman%20Siswa!5e1!3m2!1sid!2sid!4v1765194083660!5m2!1sid!2sid"
          style={{ border: 0 }}
          className="w-full h-64 rounded-md"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h1 className="font-extrabold text-3xl my-6">02</h1>
        <h1 className="font-bold text-xl">CABANG TAMSIS</h1>
        <h1 className="my-3 bg-black text-primary p-2 rounded-md text-xs font-extrabold w-max tracking-widest">
          DRINKS ONLY
        </h1>
        <span className="flex gap-x-2 text-sm">
          <MapPin size={18} />
          <span>
            <h1 className="mb-2">ALAMAT</h1>
            <h1 className="font-semibold mb-2">
              Jl. Taman Siswa No.27C Wirogunan YK ( bunaaca lantai 2 )
            </h1>
          </span>
        </span>
        <span className="flex gap-x-2 text-sm mt-6">
          <Clock size={18} />
          <span>
            <h1 className="mb-2">JAM</h1>
            <h1 className="font-semibold mb-2">09:00 - 22:00 WIB</h1>
            <h1>Senin - Minggu</h1>
          </span>
        </span>
        <Link
          href={""}
          className="bg-black text-primary text-sm flex gap-x-2 justify-center w-full p-3 rounded-md mt-12 font-bold tracking-widest"
        >
          <Navigation /> GET DIRECTIONS
        </Link>
      </div>
    </section>
  );
}
