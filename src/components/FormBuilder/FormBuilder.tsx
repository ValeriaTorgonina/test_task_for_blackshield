import React, { FC, HTMLInputTypeAttribute, useEffect } from 'react';
import { FormField, FormFieldType, FormValues } from './types';
import styles from './FormBuilder.module.scss';

const INPUT_TYPES: Record<FormFieldType, HTMLInputTypeAttribute> = {
  inputText: 'text',
  inputEmail: 'email',
  inputPassword: 'password',
};

type FormBuilderProps = {
  formFields: FormField[];
  formValues: FormValues;
  onChange: (values: FormValues) => void;
};

export const FormBuilder: FC<FormBuilderProps> = ({
  formFields,
  formValues,
  onChange,
}) => {
  const handleChangeValue = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    onChange({ ...formValues, [key]: value });
  };

  // при инициализации ставим изначальные значения инпутов
  useEffect(() => {
    const defaultValues = formFields.reduce(
      (values, field) => ({
        ...values,
        [field.id]: field.defaultValue ?? '',
      }),
      formValues,
    );

    onChange({ ...formValues, ...defaultValues });
  }, [formFields]);

  return (
    <>
      {formFields.map((field) => (
        <label key={field.id} className={styles.inputWrapper}>
          <span className={styles.label}>{field.label}</span>
          <input
            type={INPUT_TYPES[field.type]}
            className={styles.input}
            value={formValues[field.id] ?? ''}
            onChange={(e) =>
              handleChangeValue({
                key: field.id,
                value: e.currentTarget.value,
              })
            }
          />
        </label>
      ))}
    </>
  );
};
