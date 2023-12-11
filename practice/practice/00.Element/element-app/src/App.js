import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  render() {
    //[1] 리액트 자바스크립트로 엘리먼트 생성
    const link = React.createElement('a', { href: 'http://www.google.com', target: '_blank', style: { color: 'blue' } }, '구글 사이트로 가기')
    const box = React.createElement('div', { className:'box' }, 'BOX')
    const element = React.createElement('div', null, link, box, React.createElement('h1', null, 'Hello Element'), React.createElement('p', null, 'This is an Element'))
    //return element

    //[2] JSX로 엘리먼트 생성
    const element2 = (
      <div>
        <h1>Hello Element</h1>
        <p>JSX로 썼습니다~</p>
        <a href='http://www.google.com' target='_blank' style={{ color: 'blue' }}>구글 사이트로 가기</a>
        <div className='box'>BOXX</div>
      </div>
    )
    return element2
  }
}

export default App;
