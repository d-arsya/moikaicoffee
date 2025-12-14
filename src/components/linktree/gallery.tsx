import Image from "next/image";
import Foto from "../../../public/1.jpg";

export default function Gallery() {
  const photos = [Foto, Foto, Foto, Foto, Foto, Foto]; // duplicate for demo

  return (
    <section className="">
      <h1 className="text-center font-semibold text-lg mb-4">Ambience</h1>

      <div className="grid grid-cols-2 gap-2">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={photo}
              alt="Moikai ambience"
              className="object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
