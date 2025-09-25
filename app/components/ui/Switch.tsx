import { useState } from "react";

type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

export const Switch = ({
  checked = false,
  onChange,
  className = "",
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
        isChecked ? "bg-indigo-500" : "bg-gray-300"
      } ${className}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
          isChecked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};
