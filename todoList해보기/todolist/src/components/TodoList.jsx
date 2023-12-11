import React, { useEffect } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  let [todoList, setTodoList] = React.useState([])
  let url = 'http://192.168.30.119:8080/todos'
  let getTodoList = async function(){
     await fetch(url)
     .then((res)=>{
        console.log(res,"res객체가 제대로 담기는지"); 
        //console.log(res.json(),'제이슨형식');
        return res.json();
      })
      .then((data)=>{
        setTodoList(data);

      })
    .catch((err)=>{
      console.error('목록가져오기 실패', err);
    })
  };

  useEffect(() => {

    fetch(url)
     .then((res)=>{
        //console.log(res.json(),'제이슨형식');
        return res.json();
      })
      .then((data)=>{
        setTodoList(data);

      })
    .catch((err)=>{
      console.error('목록가져오기 실패', err);
      
    })

  }, [])
  

  // React.useEffect(()=>{getTodoList()})

  return (
    <div>
      {todoList.map((todoItem)=>{
        return <TodoItem key={todoItem.no} no={todoItem.no} name={todoItem.name} status={todoItem.status}/>
      })}
    </div>
  )
}

export default TodoList