import React from 'react'

const FunctionComponent = () => {
    //useState로 상태 정의
    const [name, setName] = React.useState('Aloha')

    //버튼 클릭 시
    const handleClick = (newName) =>{
        console.log(`Click ${newName}`)
        //name 상태 업데이트
        setName(newName)
    }

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <h2>Hello I'm {name}</h2>
            <button onClick={ ()=>{handleClick('하이~')} }>하이~</button>
            <button onClick={ ()=>{handleClick('방가~')} }>방가~</button>
        </div>
    )
}

export default FunctionComponent