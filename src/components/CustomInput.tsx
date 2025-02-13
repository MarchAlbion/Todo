"use client";
import React, { ChangeEventHandler } from "react";

type Props = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (newVal:React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <div>
      <div className="relative mt-2">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          className="peer block w-full px-3 py-1.5 bg-transparent text-gray-200 placeholder:text-gray-300 focus:outline focus:outline-0 sm:text-sm/6"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-green-600"
        />
      </div>
    </div>
  );
};
