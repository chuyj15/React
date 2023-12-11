import React from 'react'
import Card from './Card'

const CardList = () => {
    //서버에서 데이터 받아왔다고 생각하기. 
    //Card 컴포넌트에 전달할 데이터
    const cardData = [
        {id:0, title : '카드1', content : '카드1의 내용'},
        {id:1, title : '카드2', content : '카드2의 내용'},
        {id:2, title : '카드3', content : '카드3의 내용'}
    ]
  return (
    <div>
        {/* <Card key={0} title={cardData[0].title} content={cardData[0].content} />
        <Card key={1} title={cardData[1].title} content={cardData[1].content} />
        <Card key={2} title={cardData[2].title} content={cardData[2].content} /> */}

        {
            cardData.map((card)=>{
                return 
                <div><Card id={card.id} title={card.title} content={card.content}></Card>
                <p>Carddddd</p></div>
            })
        }
    </div>
  )
}

export default CardList