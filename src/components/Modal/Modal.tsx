import React, { ReactNode } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import styles from './Modal.module.css';
import Portal from '@/components/Portal';
import { X } from 'react-feather';

function Modal({ children, closeModal }: { children: ReactNode, closeModal: Function }) {

  return <Portal>
    <ReactFocusLock>
      <RemoveScroll>
        <div className={ styles.wrapper }>
          <div className={ styles.header }>
            <button className={ styles.closeButton } onClick={ () => closeModal() }>
              <X/>
            </button>
          </div>
          <div className={ styles.content }>
            { children }
          </div>
        </div>
      </RemoveScroll>
    </ReactFocusLock>
  </Portal>;
}

export default Modal;
