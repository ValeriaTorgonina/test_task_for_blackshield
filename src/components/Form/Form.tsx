import React, { FC, FormEvent, useMemo, useState } from 'react';
import Button from '../Button';
import FormBuilder from '../FormBuilder';
import { FormField, FormValues } from '../FormBuilder/types';
import styles from './Form.module.scss';

type FormProps = {
  formFields: FormField[];
  onSubmit: (values: FormValues) => void;
};

export const Form: FC<FormProps> = ({ formFields, onSubmit }) => {
  const [formValues, setFormValues] = useState<FormValues>({});

  const isSubmitDisabled = useMemo(
    () =>
      // если среди обязательных полей найдено поле без значения - кнопка блокируется
      !!formFields
        .filter(({ required }) => required)
        .find((field) => !formValues[field.id]?.length),
    [formFields, formValues],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(formValues);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span className={styles.decor}>💁🏻‍♀️</span>
      <FormBuilder
        formFields={formFields}
        onChange={setFormValues}
        formValues={formValues}
      />
      <Button disabled={isSubmitDisabled} isSubmit classNames={styles.submit}>
        Submit
      </Button>
    </form>
  );
};
