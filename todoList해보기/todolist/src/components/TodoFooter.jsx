import React from 'react'

const TodoFooter = () => {

  const allDel = ()=>{
    let url = 'http://192.168.30.119:8080/todos/-1'
    let init = {method : 'DELETE'}
    fetch(url, init).then(()=>{alert('전체삭제')}).catch(()=>{console.error('전체삭제안됨..')})
  }

  const allDone = ()=>{
    let url = 'http://192.168.30.119:8080/todos'
    let init = {method : 'PUT', body : JSON.stringify({no : '-1'}), headers : {"Content-Type" : "application/json"} }
    fetch(url, init).then(()=>{alert('전체완료')}).catch(()=>{console.error('전체완료안됨..')})
  }

  return (
    <div className='footer'>
        <button onClick={allDel}>전체삭제</button>
        <button onClick={allDone}>전체완료</button>
    </div>
  )
}

export default TodoFooter