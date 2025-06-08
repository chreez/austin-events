import React from 'react';
import Button from './ui/Button';

export interface FilterChipsProps {
  options: string[];
  value: string;
  onChange?: () => void;
}

/** Simple chip-style filtering buttons */
export default function FilterChips({ options, value, onChange = () => {} }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => onChange()} className={value === '' ? '' : 'btn-outline'}>
        All
      </Button>
      {options.map(opt => (
        <Button
          key={opt}
          onClick={() => onChange()}
          className={value === opt ? '' : 'btn-outline'}
        >
          {opt}
        </Button>
      ))}
    </div>
  );
}
