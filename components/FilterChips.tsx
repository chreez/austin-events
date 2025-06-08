import React from 'react';

export interface FilterChipsProps {
  options: string[];
  value: string;
  onChange?: () => void;
}

/** Simple chip-style filtering buttons */
export default function FilterChips({ options, value, onChange = () => {} }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange()}
        className={`px-3 py-1 rounded ${value === '' ? 'bg-hotpink text-white' : 'bg-white border'}`}
      >
        All
      </button>
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange()}
          className={`px-3 py-1 rounded ${value === opt ? 'bg-hotpink text-white' : 'bg-white border'}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
