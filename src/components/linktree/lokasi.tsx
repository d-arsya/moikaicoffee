import { Clock, MapPin, Navigation } from "lucide-react";
import Link from "next/link";
export default function Lokasi() {
  return (
    <section className="flex flex-col gap-y-3 py-6">
      <h1 className="text-center font-bold text-lg">Our Store</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.1291370836148!2d110.3756152!3d-7.777798599999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59332dfcf31f%3A0xbbd22f76ee43e0b!2sMoikai%20Coffee%20CDT!5e1!3m2!1sid!2sid!4v1765195200416!5m2!1sid!2sid"
        style={{ border: 0 }}
        className="w-full h-48 rounded-md"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Link
        href={""}
        className="bg-primary text-black text-sm flex gap-x-2 items-center justify-center w-full p-2 rounded-md mt-2 font-bold tracking-widest"
      >
        <Navigation />{" "}
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="font-bold text-md">Cabang CDT</h1>
          <h1 className="bg-black text-primary p-2 rounded-md text-xs font-extrabold w-max tracking-widest">
            FOOD & DRINKS
          </h1>
        </div>
      </Link>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.885307189242!2d110.37803180000002!3d-7.805854299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57f414232bb5%3A0x570e82abd98c909d!2sMOIKAI%20Coffee%20Taman%20Siswa!5e1!3m2!1sid!2sid!4v1765194083660!5m2!1sid!2sid"
        style={{ border: 0 }}
        className="w-full h-48 rounded-md mt-6"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Link
        href={""}
        className="bg-primary text-black text-sm flex gap-x-2 items-center justify-center w-full p-2 rounded-md mt-2 font-bold tracking-widest"
      >
        <Navigation />
        <h1 className="font-bold text-md">Cabang Tamsis</h1>
        <h1 className="bg-black text-primary p-2 rounded-md text-xs font-extrabold w-max tracking-widest">
          DRINKS ONLY
        </h1>
      </Link>
    </section>
  );
}
