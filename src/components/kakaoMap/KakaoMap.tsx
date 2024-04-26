import { useEffect } from 'react';

const { kakao } = window;

export default function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.140029, 127.050354),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(37.140029, 127.050354);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <div id="map" style={{ width: '100%', height: '200px' }}></div>
    </>
  );
}
