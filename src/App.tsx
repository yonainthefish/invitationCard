import GlobalStyle from './GlobalStyle';
import Main from './pages/MainPage';

declare global {
  interface Window {
    Kakao: any;
  }
}
function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
