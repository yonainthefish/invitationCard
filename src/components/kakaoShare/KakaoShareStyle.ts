import styled from 'styled-components';

export const KakaoShareBtn = styled.button`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--gray-900);
  padding: 3px 0;

  img {
    width: 30px;
    aspect-ratio: 1/1;
  }

  p {
    color: var(--gray-900);
  }
`;
