'use client';
import React from 'react';
import CardData from '@/model/CardData';
import styles from './Card.module.css';
import Modal from '@/components/Modal';
import CardModalContent from '@/components/CardModalContent';
import Image from 'next/image';
import Digram from '@/components/Digram';

function Card({ card }: { card: CardData }) {
  const [ fullView, setFullView ] = React.useState(false);
  const { name, image } = card;

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
          {
            image ? <Image src={ `data:image/jpeg;base64, ${ image }` } alt={ name }/> : <Digram name={ name }/>
          }
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
