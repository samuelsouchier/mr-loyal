'use client';
import React from 'react';
import CardData from '@/model/CardData';
import styles from './Card.module.css';
import JsBarcode, { Options } from 'jsbarcode';
import Modal from '@/components/Modal';

function Card({ card }: { card: CardData }) {
  const [ fullView, setFullView ] = React.useState(false);
  const { name, barcode, barcodeType } = card;
  const containerRef = React.useRef<any>();

  React.useEffect(() => {
    const options: Options = {
      format: barcodeType,
      background: 'transparent',
      lineColor: 'rgb(0, 9, 72)',
      width: 2,
      height: 80,
    }
    JsBarcode(containerRef.current, barcode, options);
  }, [ barcode, barcodeType ]);

  const onCardClick = () => {
    // Should open the full screen view
    console.log('onCardClick')
    setFullView(true);
  }
  const onCardClose = () => {
    console.log('onCardClose')
    setFullView(false);
  }

  return (
    <>
      <button className={ styles.card } onClick={ onCardClick }>
        <h2>{ name }</h2>
        <div className={ styles.barcode }>
          <canvas ref={ containerRef } className={ styles.barcodeObject }/>
        </div>
      </button>
      {
        fullView && <Modal closeModal={ onCardClose }>
          <div className={ styles.barcode }>
            <canvas ref={ containerRef } className={ styles.barcodeObject }/>
          </div>
        </Modal>
      }
    </>
  );
}

export default Card;
