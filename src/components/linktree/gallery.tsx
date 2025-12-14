import Image from "next/image";

export default function Gallery() {
  const photos = Array.from(
    { length: 11 },
    (_, i) => `/photos/photos-${i + 1}.jpg`
  );

  return (
    <section className="">
      <h1 className="text-center font-semibold text-lg mb-4">Ambience</h1>

      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <Image
              src={photo}
              alt={`Moikai ambience ${index + 1}`}
              width={200}
              height={500}
              className="object-cover aspect-3/4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
