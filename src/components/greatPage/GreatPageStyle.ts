import styled from 'styled-components';

const GreatSection = styled.section`
  h1 {
    font-size: 30px;
    color: var(--primary-color);
    line-height: 50px;
    font-weight: 300;
    padding: 0 20px;
    margin: 50px 0 0;

    span {
      font-size: 60px;
      font-weight: 600;
    }
  }

  img {
    width: 100%;
  }

  ul {
    padding: 0px 25px;
    margin-top: 50px;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      h3 {
        background-color: var(--point-color);
        padding: 0 15px;
        border-radius: 5px;
        margin-right: 10px;
        color: var(--white-900);
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;

export { GreatSection };
