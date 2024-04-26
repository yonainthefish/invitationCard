import { useEffect } from 'react';
import KakaoShareIcon from '../../assets/message-circle.png';
import { KakaoShareBtn } from './KakaoShareStyle';

export default function KakaoShare() {
  useEffect(() => {
    kakaoButton();
  }, []);
  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('e79b288ebffab6c35ea1c3d7624e2f3a');
      }

      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: '오산지방회 평신도 연합 바자회',
          description: '여러분을 초대합니다.',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://invitation-card-iota.vercel.app/',
            webUrl: 'https://invitation-card-iota.vercel.app/',
          },
        },

        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'https://invitation-card-iota.vercel.app/',
              webUrl: 'https://invitation-card-iota.vercel.app/',
            },
          },
        ],
      });
    }
  };
  return (
    <>
      <KakaoShareBtn id="kakaotalk-sharing-btn">
        <img src={KakaoShareIcon} alt="카카오톡으로 공유하기" />
        <p>카카오톡으로 공유하기</p>
      </KakaoShareBtn>
    </>
  );
}
