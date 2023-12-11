import React, { useState } from 'react'
const Product = () => {
    const [quantity, setQuantity] = useState(1)
    const pricePerUnit = 1000 // 상품 1개의 가격
    // 수량 증가 함수
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    // 수량 감소 함수
    const decreaseQuantity = () => {
        if (quantity ==1 ) setQuantity(1)
        else setQuantity(quantity - 1)
    }
    // 총 가격 계산
    const totalPrice = quantity * pricePerUnit
    return (
        <div>
            <h2>상품 가격 계산</h2>
            <p>수량 : {quantity}</p>
            <p>가격 : {pricePerUnit}</p>
            <p>총 가격 : {totalPrice}</p>
            <button onClick={increaseQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={decreaseQuantity}>-</button>
        </div>
    )
}


export default Product