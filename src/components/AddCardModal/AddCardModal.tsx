import * as React from 'react';
import styles from '@/components/Header/Header.module.css';
import Modal from '@/components/Modal';
import { FormEvent } from 'react';

function AddCardModal({ onClose }: { onClose: () => void }) {
  const [ newCardName, setNewCardName ] = React.useState('');
  const [ newCardBarcode, setNewCardBarcode ] = React.useState('');
  const id = React.useId();

  const handleCreateCard = (event: FormEvent) => {
    event.preventDefault();
    // TODO: add a new card

    // If success : close
    onClose();
  }

  return (
    <Modal closeModal={ () => onClose() }>
      <form className={ styles.modalWrapper } onSubmit={ handleCreateCard }>
        <h2>New card</h2>
        <div className={ styles.scanner }>There will go the scanner</div>
        <label htmlFor={ `${ id }-name` }>Name</label>
        <input type="text"
               id={ `${ id }-name` }
               value={ newCardName }
               onChange={ event => setNewCardName(event.target.value) }
               required={ true }
        />
        <button>Create</button>
      </form>
    </Modal>
  );
}

export default AddCardModal;
