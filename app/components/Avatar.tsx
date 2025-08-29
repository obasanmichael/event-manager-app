import Image from "next/image";
import { ReactNode } from "react";

type AvatarProps = {
  children: ReactNode;
  className?: string;
};

export const Avatar = ({ children, className = "" }: AvatarProps) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export const AvatarImage = ({ src, alt }: { src: string; alt?: string }) => (
  <Image
    src={src}
    alt={alt ?? "Avatar"}
    fill
    className="object-cover rounded-full" // keep it circular if used for avatars
    sizes="(max-width: 768px) 40px, 80px" // adjust sizes for responsiveness
    priority // eager load if it's a profile pic (can remove for lazy load)
  />
);

export const AvatarFallback = ({ children }: { children: ReactNode }) => (
  <span className="text-sm font-medium text-gray-700">{children}</span>
  
);
