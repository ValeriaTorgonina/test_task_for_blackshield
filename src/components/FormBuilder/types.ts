export type FormFieldType = 'inputText' | 'inputEmail' | 'inputPassword';

export type FormField = {
  id: string;
  type: FormFieldType;
  label: string;
  required?: boolean;
  defaultValue?: string;
  isInvalid?: boolean;
};

export type FormValues = Record<string, string>;
