import { useState } from 'react';
import { ButtonModal } from './DonationAccountStyle';
import DonationBackgound from '../../assets/bankAccountBack.png';

export default function DonationAccount() {
  const accountNumber = '207013-52-104247';
  const accountOwner = '농협 예금주: 최병한(장로회 회장)';
  const [buttonText, setButtonText] = useState('복사');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setButtonText('완료');
      setTimeout(() => {
        setButtonText('복사');
      }, 2000);
    });
  };

  return (
    <ButtonModal>
      <div className="DonationFlower">
        <img src={DonationBackgound} alt="" />
      </div>
      <div className="DonationNumber">
        <h3>후원 계좌</h3>
        <div className="bankNumber">
          <p className="accountNum">{accountNumber}</p>
          <button
            className="copy"
            onClick={() => copyToClipboard(accountNumber)}
          >
            {buttonText}
          </button>
        </div>
        <p>{accountOwner}</p>
      </div>
    </ButtonModal>
  );
}
