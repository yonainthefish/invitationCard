# 💌 지인 요청으로 제작한 모바일 초대장 입니다. 💌

<br>
<br>

## 🛠1. 사용 기술
#### 1.개발언어 : React + TypeScript
#### 2.사용자 인터페이스 : styled-components
#### 3.개발 환경 구축 : vite

<br>


## 💡2. 인터페이스 미리보기

|카카오톡 지도 핀마크 기능|카카오톡 공유하기 기능|Clipboard API 기능|
|---|---|---|
|![Group 65](https://github.com/yonainthefish/invitationCard/assets/124084624/fd2b9203-09e8-4b06-99c4-98590218b92c)|![Group 63](https://github.com/yonainthefish/invitationCard/assets/124084624/8b280fe9-2a89-40cf-a568-a69e5130eacf)|![Group 62](https://github.com/yonainthefish/invitationCard/assets/124084624/c3d6e7e4-02d6-4701-aa0f-e16d29995f11)|

<br>


## ✍🏻3. 핵심 코드

#### 1. 카카오톡 지도 핀마크 사용하기

<details>
<summary> 코드 </summary>
<div markdown="1">

```js
export function KakaoMap() {
  return (
    <>
      <Map
        center={{ lat: 37.140029, lng: 127.050354 }}
        style={{ width: '100%', height: '200px' }}
        level={3}
      >
        <MapMarker position={{ lat: 37.140029, lng: 127.050354 }} />
      </Map>
      <KakaoShare />
    </>
  );
}
```

</div>
</details>

<br>

#### 2. 카카오톡 공유하기 기능 사용하기

<details>
<summary> 코드 </summary>
<div markdown="1">
  
```js
  export default function KakaoShare() {
  useEffect(() => {
    kakaoButton();
  }, []);
  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('448a82d71015e74918afc3b540ff0d0e');
      }

      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: '오산지방회 평신도 연합 바자회',
          description: '여러분을 초대합니다.',
          imageUrl:
            'https://velog.velcdn.com/images/yona_inthe_fish/post/161c0921-1b7f-4ac1-bee0-bcf857665181/image.png',
          link: {
            mobileWebUrl: 'https://invitation-card-iota.vercel.app/',
            webUrl: 'https://invitation-card-iota.vercel.app/',
          },
        },

        buttons: [
          {
            title: '자세히 보기',
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
```

</div>
</details>

<br>


#### 3. Clipboard API 사용하기 
<details>
<summary> 코드 </summary>
<div markdown="1">

```js
export default function DonationAccount() {
  const accountNumber = '2070-00-000047';
  const accountOwner = '농협 예금주: 최병x(장로회 회장)';
  const [buttonText, setButtonText] = useState('복사');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setButtonText('완료');
      setTimeout(() => {
        setButtonText('복사');
      }, 2000);
    });
  };

  return (
    <ButtonModal>
      <div className="DonationFlower">
        <img src={DonationBackgound} alt="" />
      </div>
      <div className="DonationNumber">
        <h3>후원 계좌</h3>
        <div className="bankNumber">
          <p className="accountNum">{accountNumber}</p>
          <button
            className="copy"
            onClick={() => copyToClipboard(accountNumber)}
          >
            {buttonText}
          </button>
        </div>
        <p>{accountOwner}</p>
      </div>
    </ButtonModal>
  );
}
```

</div>
</details>

<br>

