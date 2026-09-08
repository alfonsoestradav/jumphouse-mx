import Image from "next/image";

type Props = {
  title: string;
  lede: string;
  image: string;
  alt: string;
};

export function PageHero({ title, lede, image, alt }: Props) {
  return (
    <section className="relative isolate min-h-[58vh] overflow-hidden pt-24">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/30" />
      <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 lg:px-8">
        <h1 className="font-display max-w-5xl text-[4.6rem] text-ink sm:text-[7rem]">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-ink/90">{lede}</p>
      </div>
    </section>
  );
}
