import styled from 'styled-components';

const ButtonBox = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

const Button = styled.button`
  border: 1px solid var(--gray-900);
  width: 90%;
  border-radius: 20px;
  padding: 5px 0px;
`;

const ButtonModal = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--white-900);
  border: 2px solid var(--gray-900);
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  .bankNumber {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copy {
    border: 1px solid var(--gray-900);
    padding: 0 5px;
    border-radius: 5px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export { ButtonBox, Button, ButtonModal };
