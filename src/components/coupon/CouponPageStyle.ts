import styled from 'styled-components';

const CouponSection = styled.section`
  position: relative;
  margin-top: 50px;

  .couponBox {
    text-align: center;
    font-weight: 300;
  }

  .couponMent {
    position: absolute;
    top: 100px;
    left: 0px;
    width: 100%;
    padding: 0 20px 90px;
    color: var(--point-text-color);
    border-bottom: 0.5px solid var(--point-text-color);
  }

  .couponCoution {
    width: 100%;
    padding: 0 20px;
    color: var(--point-text-color);
    position: absolute;
    bottom: 270px;
    left: 0px;
    font-size: 21px;
    line-height: 28px;
  }

  span {
    font-weight: 800;
  }

  .couponPrice {
    width: 100%;
    position: absolute;
    bottom: 65px;
    left: 0px;
    font-size: 30px;
    line-height: 60px;

    h4 {
      font-size: 60px;
      font-weight: 500;
      font-family: var(--serif);
    }
  }
`;

export { CouponSection };
