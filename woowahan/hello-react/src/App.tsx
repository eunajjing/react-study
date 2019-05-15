import React from 'react';
import logo from './logo.svg';
import './App.css';
// 번들러가 자바스크립트의 코드가 아니더라도 함께 합쳐주는 역할을 한다.

// 아래는 함수형 컴포넌트
const App: React.FC = () => {
  // : React.FC
  // 타입스트립트 : 자바스크립트에 타입 기능을 추가한 것
  // 변수 뒤에 : 타입을 기술하는 문법
  // 타입은 두 개, 기본형과 객체 타입들로 갈린다
  // 리액트 패키지가 제공하는 FC라는 타입(함수)
  return (
    // 펑션 컴포넌트이기 때문에 리턴이 반드시 존재해야함
    // 직접 만든 컴포넌트는 대문자로 시작하며
    // html 호환 컴포넌트들은 소문자
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// 디폴트로 앱을 줬기 때문에 index에서 app이 가는 것