import { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className, ...props }: LabelProps) => (
  <label
    className={cn(
      "mb-1.5 block text-sm font-medium text-foreground",
      className
    )}
    {...props}
  />
);
