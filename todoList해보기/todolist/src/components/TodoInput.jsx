import React, { useEffect, useState } from 'react'


//useState는 component 안에 있기 때문에 다른 jsx에서 사용할 수 없다. 
const TodoInput = () => {
  let [inputState, setInputState] = useState(0)

  //입력
  let addHandler = function () {
    let todo = document.getElementById('todo').value
    let data3 = { name : todo }
    console.log(todo, 'todo')
    let url3 = 'http://192.168.30.119:8080/todos'
    let init3 = {
      method: 'POST',
      headers : {'Content-Type' : 'application/json'},
      body: JSON.stringify(data3)
    }
    fetch(url3, init3)
      .then((res) => { console.log(res); setInputState((prev) => prev + 1); })
      .catch((err) => { console.error(err) })
  }


  useEffect(() => {
    console.log('inputState가 변경되었습니다.');
  }, [inputState])


  return (
    <div className='todoInput'>
      <div className='todoInputt'>
        <label htmlFor="todo">할 일 입력</label>
        <input id='todo' type="text" />
      </div>
      <button onClick={addHandler}>추가</button>
    </div>
  )
}

export default TodoInput  
