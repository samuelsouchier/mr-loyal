import React from 'react';
import CardData from '@/model/CardData';
import styles from './Card.module.css';

function Card({ card }: { card: CardData }) {
  return (
    <article className={ styles.card }>
      <h2>{ card.name }</h2>
      <div className={ styles.barcode }>
        { card.barcode }
      </div>
    </article>
  );
}

export default Card;
