import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 135,
  height = 36,
  className,
}) => {
  return (
    <Image
      src="/supernovas-logo.png"
      alt="Supernovas Academy Logo"
      width={width}
      height={height}
      className={`w-[120px] h-[32px] md:w-[135px] md:h-[36px] ${
        className || ""
      }`}
      priority
    />
  );
};
