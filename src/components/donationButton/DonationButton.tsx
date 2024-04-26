import { useState } from 'react';
import { ButtonModal, ButtonBox, Button } from './DonationButtonStyle';
import Close from "../../assets/material-symbols-light_close.png"

export default function DonationButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <ButtonBox>
      <Button type="button" onClick={handleButtonClick}>
        후원계좌
      </Button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} />
    </ButtonBox>
  );
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const accountNumber = '207013-52-104247';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ButtonModal>
      <h3>계좌 정보</h3>
      <div className="bankNumber">
        <p>{accountNumber}</p>
        <button className="copy" onClick={() => copyToClipboard(accountNumber)}>
          복사
        </button>{' '}
      </div>
      <p>농협 예금주: 최병한(장로회 회장)</p>
      <button className="close" onClick={onClose}>
        <img src={Close} alt="닫기" />
      </button>
    </ButtonModal>
  );
}
