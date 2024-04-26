import { MapSection } from './MapStyle';
import { KakaoMap } from '../kakaoMap/KakaoMap';

export default function Map() {
  return (
    <>
      <MapSection>
        <h3 className="visitLoad">오시는 길</h3>
        <div>
          <h3>열린교회 비전센터</h3>
          <p>경기도 오산시 수목원로 49길 41</p>
        </div>
      </MapSection>
      <KakaoMap />
    </>
  );
}
