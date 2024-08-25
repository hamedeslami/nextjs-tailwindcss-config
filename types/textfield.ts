import { ChangeEvent } from 'react';

export interface ITextField {
    label: string;
    id: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string
  }