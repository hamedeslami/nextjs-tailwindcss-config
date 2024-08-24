import { ChangeEvent } from 'react';

export interface TextFieldType {
    label: string;
    id: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }