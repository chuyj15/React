import React, { useEffect } from 'react'

const TodoItem = (props) => {
  let status = props.status
  console.log(status)
  console.log(props.no)
  console.log(props.name)
  status = status == 1 ? 'active' : ''
  let url = 'http://192.168.30.119:8080/todos'
  let url2 = 'http://192.168.30.119:8080/todos/'

  let data = {
    no : props.no,
     name : props.name,
      status : props.status==0?1:0};
  
  let init = {
    method : 'put',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(data)
  }


  const updHandler = async function(){
    await fetch(url, init)
    .then((res)=>{alert('업뎃성공')})
    .catch((err)=>{console.error(err, '업뎃실패')})

  }

  const delHandler = async function(no){
    // let btnvalue = document.getElementById('btnid').value
    // console.log(btnvalue)
    console.log(no);
    url2 = url2 + no
    let init2 = { method : "DELETE"}
    await fetch(url2, init2)
    .then(()=>{alert('삭제성공')})
    .catch((err)=>{console.log('삭제 실패', err)})
  }



  return (
    <>
  
        <div className={`todoItem ${status}`} >
            <input onClick={updHandler} type="button"/>
            <input type="hidden" value={props.no}/>
            <label htmlFor="name">{props.name}</label>
            <button onClick={() => delHandler(props.no)} id="btnid" value={props.no}>삭제</button>
        </div>
    </>
  )
}

export default TodoItem