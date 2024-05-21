'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import CardData from '@/model/CardData';
import { BarcodeType } from '@/constants/BarcodeType';

const CARDS: CardData[] = [
  {
    id: '1',
    name: 'Card 1',
    barcode: '5901234123457',
    barcodeType: BarcodeType.EAN13,
  },
  {
    id: '2',
    name: 'Card 2',
    barcode: '5901234123457',
    barcodeType: BarcodeType.CODE128,
  },
  {
    id: '3',
    name: 'Card 3',
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

  handleCardsChange(newCards: CardData[]): void
}

export const CardsContext = React.createContext<CardsContextValue>({
  cards: [],
  handleCardsChange() {
  },
});

function CardsProvider({ children }: { children: ReactNode }) {
  const [ cards, setCards ] = React.useState<CardData[]>([]);

  const handleCardsChange = (newCards: CardData[]): void => {
    setCards(newCards);
  }

  React.useEffect(() => {
    setCards(CARDS);
  }, []);

  return <CardsContext.Provider value={ { cards, handleCardsChange } }>
    { children }
  </CardsContext.Provider>;
}

export default CardsProvider;
