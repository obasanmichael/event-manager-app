import React from "react";

type InputFieldProps = {
  label: string;
  error?: { message?: string };
} & React.InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type TextareaFieldProps = {
  label: string;
  error?: { message?: string };
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type SelectFieldProps = {
  label: string;
  error?: { message?: string };
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement> & {
    as: "select";
  };

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

export function FormField(props: FormFieldProps) {
  const { label, error, as = "input", ...rest } = props as any;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {as === "textarea" ? (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      ) : as === "select" ? (
        <select
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {"options" in props &&
            props.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </select>
      ) : (
        <input
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      )}

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
}
