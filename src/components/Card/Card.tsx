'use client';
import React from 'react';
import CardData from '@/model/CardData';
import styles from './Card.module.css';
import Modal from '@/components/Modal';
import CardModalContent from '@/components/CardModalContent';
import useCreateBarcode from '@/hooks/useCreateBarcode';
import { BarcodeConfig } from '@/model/BarcodeConfig';

function Card({ card }: { card: CardData }) {
  const [ fullView, setFullView ] = React.useState(false);
  const { name, barcode, barcodeType } = card;
  const containerRef = React.useRef<HTMLCanvasElement>(null);

  const barcodeConfig: BarcodeConfig = { background: 'transparent', lineColor: 'rgb(0, 9, 72)', width: 2, height: 80 };

  useCreateBarcode(containerRef, barcode, barcodeType, barcodeConfig);

  const onCardClick = () => {
    setFullView(true);
  }
  const onCardClose = () => {
    setFullView(false);
  }

  return (
    <>
      <button className={ styles.card } onClick={ onCardClick }>
        <h2 className={ styles.cardName }>{ name }</h2>
        <div className={ styles.barcode }>
          <canvas ref={ containerRef } className={ styles.barcodeObject }/>
        </div>
      </button>
      {
        fullView && <Modal closeModal={ onCardClose }>
          <CardModalContent card={ card }/>
        </Modal>
      }
    </>
  );
}

export default Card;
