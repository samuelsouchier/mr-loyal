import * as React from 'react';
import CardData from '@/model/CardData';
import { useRef } from 'react';
import { BarcodeConfig } from '@/model/BarcodeConfig';
import useCreateBarcode from '@/hooks/useCreateBarcode';
import styles from './CardModalContent.module.css';
import { Trash } from 'react-feather';
import IconButton from '@/components/IconButton';

function CardModalContent({ card }: { card: CardData }) {
  const { name, barcode, barcodeType } = card;
  const containerRef = useRef(null);
  const barcodeConfig: BarcodeConfig = {
    background: '#fff',
    lineColor: 'rgb(0, 9, 72)',
    height: 80,
    width: 3,
  }

  const deleteButtonColor = '#FF6666';

  useCreateBarcode(containerRef, barcode, barcodeType, barcodeConfig);

  const handleDeleteCard = () => {
  }

  return <div className={ styles.wrapper }>
    <h2>{ name }</h2>
    <svg ref={ containerRef } className={ styles.barcode }/>
    <div className={ styles.cardActions }>
      <IconButton onClick={ handleDeleteCard } color={ deleteButtonColor }>
        <Trash/>
      </IconButton>
    </div>
  </div>;
}

export default CardModalContent;
