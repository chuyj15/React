import React from 'react'; //react 라이브러리 임포트
import ReactDOM from 'react-dom/client'; //리액트라이브러리를 사용할 땐 ReactDOM 객체가 있어야 합니다. 그래야 createRoot나 render 메서드를 호출할 수 있습니다. 
import './index.css'; //애플리케이션 전반의 초기화 css 파일 import (폰트, 기본마진 등)
import App from './App'; //App 컴포넌트는 최상위 컴포넌트~! 다른 컴포넌트들을 가져와서 전체 레이아웃이 나오게 됩니다. 
import reportWebVitals from './reportWebVitals'; //웹의 성능 추적을 위한 reportWebVitals 함수를 임포트

//ReactDOM.createRoot() 메소드를 호출해서, React 루트 요소를 생성
// - id가 'root'인 React 루트 요소를 렌더링할 실제 DOM 요소를 지정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//React.StrictMode 얘가 없어도 App을 랜더링해줄 수 있습니다. 
//React.StrictMode 는 엄격모드입니다. (버그같은거 잡는 역할) StrictMode를 활성화해서 App컴포넌트를 랜더링합니다. 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 앱에서 성능 측정을 시작하려면 기능을 전달합니다
// 결과를 기록하려면(예: reportWebVitals(console.log))
// 또는 분석 엔드포인트로 전송합니다. 자세한 내용: https://bit.ly/CRA-vitals
//reportWebVitals();
reportWebVitals( console.log() );
