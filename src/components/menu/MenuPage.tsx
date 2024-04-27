import { MenuSection } from './MenuPageStyle';

export default function MenuPage() {
  return (
    <MenuSection>
      <ul>
        <li>
          <h3>살거리</h3>
          <p>
            당근(의류, 신발, 가전, 커피잔 등) <br />
            건어물, 젓갈류, 조기, 참기름, 들기름 <br />
            미숫가루, 땅콩, 대추, 성찬 포도주
            <br />
            열무김치, 깍두기, 오이지 기타
          </p>
        </li>
        <li>
          <h3>먹거리</h3>
          <p>떡볶이, 김밥, 부침개, 순대, 오뎅, 뉴욕핫도그</p>
        </li>
        <li>
          <h3>음 료</h3>
          <p>
            에이드(자몽, 유자, 레몬), 케모마일, 도라지차
            <br />
            아메리카노, 카라멜마키아또, 카페라떼 등
          </p>
        </li>
      </ul>
    </MenuSection>
  );
}
