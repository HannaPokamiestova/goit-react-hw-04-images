import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContet } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const hendelKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendelKeyDown);

    return () => {
      window.removeEventListener('keydown', hendelKeyDown);
    };
  }, [onClose]);

  const hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={hendleBackdropClick}>
      <ModalContet>{children}</ModalContet>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
