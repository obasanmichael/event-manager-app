import { ReactNode } from "react";

type LabelProps = {
  htmlFor?: string;
  children: ReactNode;
};

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-1 text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
};
