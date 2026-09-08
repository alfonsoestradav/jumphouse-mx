import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  height?: number;
};

export function Logo({ className = "", height = 52 }: Props) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Jump House Trampoline Park"
        width={height}
        height={height}
        className="w-auto"
        style={{ height }}
        priority
      />
    </Link>
  );
}
