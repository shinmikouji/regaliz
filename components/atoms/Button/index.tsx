import React from 'react';
import s from './index.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href
}) => {
  const TagName = href ? 'a' : 'button';
  return (
    <TagName
      className={s['a-button']}
    >
      {children}
    </TagName>
  )
}