import * as React from 'react';
import CardData from '@/model/CardData';
import { useContext, useRef } from 'react';
import { BarcodeConfig } from '@/model/BarcodeConfig';
import useCreateBarcode from '@/hooks/useCreateBarcode';
import styles from './CardModalContent.module.css';
import { Trash } from 'react-feather';
import IconButton from '@/components/IconButton';
import { CardsContext } from '@/providers/CardsProvider';
import Modal from '@/components/Modal';

function CardModalContent({ card }: { card: CardData }) {
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false);
  const { handleRemoveCard } = useContext(CardsContext);
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
    handleRemoveCard(card.id);
    setShowDeleteModal(false);
  }

  return <div className={ styles.wrapper }>
    <h2>{ name }</h2>
    <svg ref={ containerRef } className={ styles.barcode }/>
    <div className={ styles.cardActions }>
      <IconButton onClick={ () => setShowDeleteModal(true) } color={ deleteButtonColor }>
        <Trash/>
      </IconButton>
    </div>
    {
      showDeleteModal && <Modal closeModal={ () => setShowDeleteModal(false) }>
        <div className={ styles.wrapper }>
          <h2>Do you really want to delete card { card.name }?</h2>
          <div className={ `${ styles.cardActions } ${ styles.deleteCardActions }` }>
            <button onClick={ () => setShowDeleteModal(false) }>No, don&apos;t delete
            </button>
            <button onClick={ handleDeleteCard } className={ styles.buttonDanger }>Yes, delete card</button>
          </div>
        </div>
      </Modal>
    }
  </div>;
}

export default CardModalContent;
