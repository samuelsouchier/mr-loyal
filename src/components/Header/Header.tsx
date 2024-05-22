'use client';
import * as React from 'react';
import styles from './Header.module.css';
import IconButton from '@/components/IconButton';
import { Plus } from 'react-feather';
import AddCardModal from '@/components/AddCardModal';

function Header() {
  const [ newCardModalOpen, setNewCardModalOpen ] = React.useState(false);

  return (
    <>
      <div className={ styles.header }>
        <h1>Mr. Loyal</h1>
        <IconButton color="#FFFFFF" type="button" onClick={ () => setNewCardModalOpen(true) }>
          <Plus/>
        </IconButton>
      </div>
      {
        newCardModalOpen && <AddCardModal onClose={ () => setNewCardModalOpen(false) }/>
      }
    </>
  );
}

export default Header;
