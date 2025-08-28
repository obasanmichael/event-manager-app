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
  const { label, error, as = "input", ...rest } = props;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-600">{label}</label>

      {as === "textarea" ? (
        <textarea
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 shadow-sm 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none 
                 transition-all duration-200 ease-in-out"
        />
      ) : as === "select" ? (
        <select
          {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 shadow-sm 
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none 
                 transition-all duration-200 ease-in-out"
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
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-800 shadow-sm 
                 placeholder:text-gray-400
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none 
                 transition-all duration-200 ease-in-out"
        />
      )}

      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error.message}</p>
      )}
    </div>
  );
}
