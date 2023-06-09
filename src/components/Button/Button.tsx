import cn from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  disabled?: boolean;
  isSubmit?: boolean;
  classNames?: string;
}>;

export const Button: FC<ButtonProps> = ({
  onClick,
  disabled,
  isSubmit,
  classNames,
  children,
}) => {
  return (
    <button
      className={cn(styles.button, classNames)}
      onClick={onClick}
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};
