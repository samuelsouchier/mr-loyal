'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import CardData from '@/model/CardData';
import { BarcodeType } from '@/constants/BarcodeType';
import cardsReducer from '@/reducers/CardsReducer';

const CARDS: CardData[] = [
  {
    id: '1',
    name: 'Card 1',
    barcode: '5901234123457',
    barcodeType: BarcodeType.EAN13,
  },
  {
    id: '2',
    name: 'Loyalty Card 2',
    barcode: '5901234123457',
    barcodeType: BarcodeType.CODE128,
  },
  {
    id: '3',
    name: 'My Shop',
    barcode: '5901234123457',
    barcodeType: BarcodeType.CODE39,
  },
  {
    id: '4',
    name: 'Card 4',
    barcode: '5901234123457',
    barcodeType: BarcodeType.ITF14,
  },
];

interface CardsContextValue {
  cards: CardData[];

  handleAddCard(newCard: CardData): void;

  handleRemoveCard(cardId: string): void;
}

export const CardsContext = React.createContext<CardsContextValue>({
  cards: [],
  handleAddCard() {
  },
  handleRemoveCard() {
  },
});

function CardsProvider({ children }: { children: ReactNode }) {
  const [ cards, dispatch ] = React.useReducer(cardsReducer, []);

  const handleCardsChange = (newCards: CardData[]): void => {
    dispatch({
      type: 'set',
      cards: newCards,
    });
  }

  const handleAddCard = (newCard: CardData): void => {
    dispatch({
      type: 'add',
      newCard,
    });
  }

  const handleRemoveCard = (cardId: string): void => {
    dispatch({
      type: 'remove',
      cardId,
    });
  }

  React.useEffect(() => {
    handleCardsChange(CARDS);
  }, []);

  return <CardsContext.Provider value={ { cards, handleAddCard, handleRemoveCard } }>
    { children }
  </CardsContext.Provider>;
}

export default CardsProvider;
