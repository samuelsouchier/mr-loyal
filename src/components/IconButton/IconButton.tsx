import * as React from 'react';
import { ReactNode } from 'react';
import styles from './IconButton.module.css';

type ButtonType = 'button' | 'submit' | 'reset';

function IconButton({ children, onClick, type = 'button', color, backgroundColor }: {
  children: ReactNode,
  onClick: () => void,
  type?: ButtonType,
  color?: string,
  backgroundColor?: string,
}) {

  return <button
    onClick={ onClick }
    type={ type ?? 'button' }
    className={ styles.iconButton }
    style={ {
      backgroundColor,
      color,
      borderColor: color,
    } }
  >
    { children }
  </button>;
}

export default IconButton;
