'use client';
import React from 'react';
import CardData from '@/model/CardData';
import styles from './Card.module.css';
import JsBarcode, { Options } from 'jsbarcode';

function Card({ card }: { card: CardData }) {
  const { name, barcode, barcodeType } = card;
  const containerRef = React.useRef<any>();

  React.useEffect(() => {
    const options: Options = {
      format: barcodeType,
      background: 'transparent',
      lineColor: '#FFFFFF',
      width: 1,
    }
    JsBarcode(containerRef.current, barcode, options);
  }, [ barcode, barcodeType ]);

  return (
    <article className={ styles.card }>
      <h2>{ name }</h2>
      <div className={ styles.barcode }>
        <svg ref={ containerRef } style={ { maxWidth: '100%' } }></svg>
      </div>
    </article>
  );
}

export default Card;
