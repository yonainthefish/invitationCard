import CouponImage from '../../assets/coupon.png';
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
          5월 가정의 달을 맞이하여 <br />
          오산지방회에 속한 개체교회 목사님들과 성도님들이
          <br />
          많이 참석하여 주셔서 은혜롭고 복된 예배와 <br />
          친교의 시간과 풍성한 바자회가 될 수 있도록
          <br />
          <span>기도</span>와 <span>적극적인 후원 </span>부탁드리겠습니다.
        </p>
        <p className="couponCoution">
          본 티켓은 <span>5월 18일 당일만</span>
          <br />
          사용할 수 있으며, 사용하지 않은 <br />
          티켓은 후원금으로 후원됨을 <br />
          알려드립니다.
        </p>
        <div className="couponPrice">
          <p>일일찻집 & 선교마켓</p>
          <h4>₩10,000</h4>
        </div>
      </div>
    </CouponSection>
  );
}
