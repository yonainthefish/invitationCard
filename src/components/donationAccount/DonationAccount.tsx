import { ButtonModal } from './DonationAccountStyle';
import DonationBackgound from '../../assets/bankAccountBack.png';

export default function DonationAccount() {
  const accountNumber = '207013-52-104247';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ButtonModal>
      <div>
        <h3>후원 계좌</h3>
        <div className="bankNumber">
          <p className='accountNum'>{accountNumber}</p>
          <button
            className="copy"
            onClick={() => copyToClipboard(accountNumber)}
          >
            복사하기
          </button>
        </div>
        <p>농협 예금주: 최병한(장로회 회장)</p>
      </div>
      <div className="DonationFlower">
        <img src={DonationBackgound} alt="" />
      </div>
    </ButtonModal>
  );
}
