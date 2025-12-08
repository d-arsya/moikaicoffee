export default function About() {
  return (
    <section className="px-6 py-24 bg-black">
      <h1 className="text-primary font-bold tracking-widest flex items-center gap-x-3">
        <span className="h-0.5 bg-white w-10 inline-block"></span>
        ABOUT US
        <span className="h-0.5 bg-white w-10 inline-block"></span>
      </h1>
      <h1 className="font-bold text-2xl mt-6">
        JAPANESE <span className="text-primary">VINTAGE COFFEE</span> PLACE
      </h1>
      <p className="mt-10 text-sm text-justify leading-loose">
        Moikai Coffee menghadirkan suasana homey yang hangat dan menenangkan.
        Nama 'Moikai' diambil dari kata Jepang 'Mouikkai' (once more), sebuah
        filosofi untuk menciptakan pengalaman yang membuat rindu. Mulai dari
        racikan kopi hingga suasana di setiap sudutnya, kami pastikan Anda
        merasa senyaman di rumah sendiri dan selalu ingin kembali.
      </p>
    </section>
  );
}
