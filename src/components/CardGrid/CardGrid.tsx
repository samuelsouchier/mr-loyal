'use client';

import React from 'react';
import CardData from '@/model/CardData';
import styles from './CardGrid.module.css';
import Card from '@/components/Card';
import { CardsContext } from '@/providers/CardsProvider';

function CardGrid() {
  const { cards } = React.useContext(CardsContext);
  return (
    <div className={ styles.grid }>
      { cards.map((card: CardData) => (
        <Card card={ card } key={ card.id }/>
      )) }
    </div>
  );
}

export default CardGrid;
