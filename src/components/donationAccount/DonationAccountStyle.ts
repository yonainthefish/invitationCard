import styled from 'styled-components';

const ButtonModal = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-top: 100px;

  .DonationNumber {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h3 {
      margin-bottom: 10px;
    }

    .bankNumber {
      width: 60%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .accountNum {
      font-size: 18px;
      font-weight: 900;
    }

    .copy {
      padding: 0 7px;
      border-radius: 5px;
      background-color: var(--gray-100);
      color: var(--white-900);
      font-size: 15px;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .DonationFlower {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 300px;
      margin: 0;
      padding: 0;
      opacity: 30%;
    }
  }
`;

export { ButtonModal };
