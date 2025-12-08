export default function Jumbotron() {
  return (
    <section className="h-dvh flex items-center justify-center">
      <div className="bg-primary rounded-full w-80 aspect-square p-2 flex flex-col gap-y-4 items-center justify-center">
        <h1 className="font-bold text-4xl">Moikai Coffee</h1>
        <p className="font-bold text-xs">
          • Signature Brews • Cozy Space • Good Stories
        </p>
        <p className="text-xs text-center">
          Nikmati kopi dengan tenang dan suasana yang hangat, hingga kamu ingin
          datang sekali lagi.
        </p>
      </div>
    </section>
  );
}
