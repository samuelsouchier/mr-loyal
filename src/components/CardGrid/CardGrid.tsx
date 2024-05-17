import React from 'react';
import CardData from '@/model/CardData';
import styles from './CardGrid.module.css';
import Card from '@/components/Card';

function CardGrid({ cards }: { cards: CardData[] }) {
  return (
    <div className={ styles.grid }>
      { cards.map((card, index) => (
        <Card card={ card }/>
      )) }
    </div>
  );
}

export default CardGrid;
