import { ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string };

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`rounded-2xl bg-white border border-gray-200 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }: CardProps) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "" }: CardProps) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

export const CardContent = ({ children, className = "" }: CardProps) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);
