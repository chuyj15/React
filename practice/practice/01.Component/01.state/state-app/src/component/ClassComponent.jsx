import React, { Component } from 'react'

export class ClassComponent extends Component {
    //생성자 함수
    constructor(props) {
        super(props)
        //상태 정의
        this.state = { name: 'Aloha', age: 28 }
        //컴포넌트에 바인딩
        //뒤의 함수들(handleClickJoeun())을 컴포넌트에 연결해주는 작업이 필요합니다. 
        this.handleClickAloha = this.handleClickAloha.bind(this)
        this.handleClickJoeun = this.handleClickJoeun.bind(this)
        //this.handleClick = this.handleClick.bind(this) 
        //이건 없어도 되네...
    }

    //Aloha 버튼 클릭 시 (익명함수)
    handleClickAloha() {
        console.log('Aloha Click')
        //상태 정의
        this.setState({ name: 'Aloha', age: 20 })
    }

    //joeun  버튼 클릭 시
    handleClickJoeun() {
        this.setState({ name: 'JOEUN', age: 10 })
    }

    //알로하, 조은 익명함수 솔직히 다 이름이랑 나이만 바뀌니깐 그걸 하나로~
    handleClick(newName, newAge) {
        console.log(`click ${newName}`)
        this.setState({ name: newName, age: newAge })
    }
    render() {
        let name = this.state.name
        let { name2 } = this.state
        let age = this.state.age
        return (
            <div>
                <h1>클래스 컴포넌트</h1>
                <h2>Hello I'm {name}</h2>
                <h2>Hello I'm {name2}</h2>
                <h2>Hello I'm {age}</h2>
                <button onClick={this.handleClickAloha}>Aloha</button>
                <button onClick={this.handleClickJoeun}>Joeun</button>
                <button onClick={() => { this.handleClick('yoonjoo', 1) }}>yoonjoo</button>
                <button onClick={() => { this.handleClick('yoonjoo2', 2) }}>yoonjoo</button>
            </div>
        )
        //name속성이 변함으로서,, 리액트가 자동으로 감지해 변경해줄 겁니다. 
    }
}

export default ClassComponent