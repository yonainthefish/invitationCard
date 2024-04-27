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
  }

  span {
    font-weight: 800;
  }
`;

export { CouponSection };
