import React from 'react';
import styles from "./index.module.scss";

export type TextProps = {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({children}) => {
  return (
    <p className={styles.text}>{children}</p>
  )
}