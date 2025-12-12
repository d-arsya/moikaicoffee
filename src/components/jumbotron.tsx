export default function Jumbotron() {
  return (
    <section className="h-dvh flex items-center justify-center">
      <div className="bg-primary rounded-full w-80 md:w-1/3 aspect-square p-2 flex flex-col gap-y-4 items-center justify-center">
        <h1 className="font-bold text-4xl md:text-7xl md:text-center">
          Moikai Coffee
        </h1>
        <p className="font-bold text-xs md:text-lg">
          • Signature Brews • Cozy Space • Good Stories
        </p>
        <p className="text-xs text-center md:text-md">
          Nikmati kopi dengan tenang dan suasana yang hangat, hingga kamu ingin
          datang sekali lagi.
        </p>
      </div>
    </section>
  );
}
