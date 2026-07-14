import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="NurAlive Logo"
      width={400}
      height={100}
      className={className}
      priority
    />
  );
}
