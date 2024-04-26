import MainImage from '../../assets/Isolation_Mode.png';
import { GreatSection } from './GreatPageStyle';

export default function GreatPage() {
  return (
    <GreatSection>
      <h1>
        오산지방회 평신도 <br />
        <span>연합 바자회</span>
      </h1>
      <img src={MainImage} alt="메인이미지" />
      <ul>
        <li>
          <h3>일시</h3>
          <p>2024.06.01(토) 11:00 ~ 18:00</p>
        </li>
        <li>
          <h3>장소</h3>
          <p>열린교회 비전센터</p>
        </li>
        <li>
          <h3>주최</h3>
          <p>오산지방사회평신도</p>
        </li>
        <li>
          <h3>문의</h3>
          <p>010-9934-9900 (이후권장로)</p>
        </li>
      </ul>
    </GreatSection>
  );
}
