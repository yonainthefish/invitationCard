import styled from 'styled-components';

const MenuSection = styled.section`
  margin: 50px 0;
  text-align: center;

  ul {
    padding: 0 20px;
  }

  li {
    margin-bottom: 30px;

    h3 {
      margin: 0 auto;
      margin-bottom: 10px;
      border-radius: 5px;
      background-color: var(--point-color);
      color: var(--white-900);
      width: 30%;
    }
  }
`;

export { MenuSection };
