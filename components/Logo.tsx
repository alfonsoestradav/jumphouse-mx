import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  height?: number;
};

export function Logo({ className = "", height = 88 }: Props) {
  const width = Math.round((height * 701) / 533);
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Jump House Trampoline Park"
        width={width}
        height={height}
        className="w-auto max-w-none"
        style={{ height, width: "auto" }}
        priority
      />
    </Link>
  );
}
