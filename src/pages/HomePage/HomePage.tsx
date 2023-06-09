import React, { FC, useState } from 'react';
import Form from '../../components/Form';
import { FormField, FormValues } from '../../components/FormBuilder/types';
import styles from './HomePage.module.scss';

const formFields: FormField[] = [
  {
    id: 'first_name',
    type: 'inputText',
    label: 'First Name',
    defaultValue: 'Some first name',
  },
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name',
  },
  {
    id: 'email',
    type: 'inputEmail',
    label: 'Email',
    required: true,
  },
  {
    id: 'password',
    type: 'inputPassword',
    label: 'Password',
    required: true,
  },
];
export const HomePage: FC = () => {
  const [, setFormValues] = useState<FormValues | null>(null);

  return (
    <div className={styles.container}>
      <Form formFields={formFields} onSubmit={setFormValues} />
    </div>
  );
};
