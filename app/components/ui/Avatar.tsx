import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = {
  children: ReactNode;
  className?: string;
};

export const Avatar = ({ children, className }: AvatarProps) => (
  <div
    className={cn(
      "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-muted",
      className
    )}
  >
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }: { src: string; alt?: string }) => (
  <Image
    src={src}
    alt={alt ?? "Avatar"}
    fill
    className="rounded-full object-cover"
    sizes="(max-width: 768px) 40px, 80px"
  />
);

export const AvatarFallback = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "text-sm font-semibold text-primary",
      className
    )}
  >
    {children}
  </span>
);
