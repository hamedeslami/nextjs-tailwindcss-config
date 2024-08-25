import { ITextField } from '@/types/textfield';
import React, { useState, FocusEvent } from 'react';

export default function TextField(props: ITextField) {
  const { label, id, type = 'text', value, onChange, placeholder = ' ', error } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(!!e.target.value);
  };

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`peer h-[50px] w-full px-2 pt-2 pb-1 text-sm border-2 rounded-[0.5rem] focus:outline-none focus:ring-0
          ${
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-slate-500 '
          }
          ${isFocused || value
            ? 'border-slate-500'
            : 'border-gray-300'
          }`}
      />
      <label
        htmlFor={id}
        className={`bg-white absolute right-2 
          ${isFocused ? 'top-1' : 'top-[0.8rem]'} pr-2 pl-2 text-sm transition-all duration-200 ease-in-out
          ${ error && 'text-red-500'}
          ${isFocused || value ? 'text-slate-500 text-xs -translate-y-3 -translate-x-1' : 'text-gray-500'}`}
      >
        {label}
      </label>

      {error && (
        <p
          className={`text-xs mt-1 ${
            error ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
}