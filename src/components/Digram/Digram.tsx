import * as React from 'react';
import styles from './Digram.module.css';

function Digram({ name }: { name: string }) {
  const digramText = getDigramText(name);
  return <div className={ styles.digram }>{ digramText }</div>;
}

function getDigramText(name: string): string {
  const words = name.split(' ');
  if (words.length > 1) {
    return [ words[0][0], words[1][0] ].join('').toUpperCase();
  }
  return words[0].length > 1 ? words[0].substring(0, 2).toUpperCase() : words[0].toUpperCase();
}

export default Digram;
