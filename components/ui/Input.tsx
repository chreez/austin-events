import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

/** Form input styled with DaisyUI */
export default function Input({ className = '', ...props }: InputProps) {
  return <input {...props} className={`input input-bordered ${className}`.trim()} />;
}
