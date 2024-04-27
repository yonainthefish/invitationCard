import CouponImage from '../../assets/FlowerBackground.png';
import { CouponSection } from './CouponPageStyle';

export default function CouponPage() {
  return (
    <CouponSection>
      <img src={CouponImage} alt="쿠폰" />
      <div className="couponBox">
        <p className="couponMent">
          주님의 이름으로 문안드리며 <br />
          하나님의 은혜가 오산지방회 각 교회와 가정에
          <br />
          충만히 임하 시기를 기원합니다.
          <br />
          2024년도 <span>오산지방회 평신도단체 연합 바자회</span>를<br />
          아래와 같이 개최합니다.
          <br />
          <br />
          많이 참석하여 주셔서 은혜로운 바자회가 <br />될 수 있도록
          <span>기도</span>와 <span>후원</span>부탁드리겠습니다.
          <br />
        </p>
      </div>
    </CouponSection>
  );
}
