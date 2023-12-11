
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardList from '../components/BoardList';
//containers에서는 props(데이터)를 내려주는 역할만 하게 할겁니다. 
const BoardListContainer = () => {
  const [boardList, setBoardList] = useState([]);
  //게시글목록 데이터
  const getBoardList = async () => {
    const response = await boards.list(); //axios가 반환하는 값의 data 속성에 실제 데이터가 들어가있음. 
    //fetch를 쓴 경우엔 JOSN.string() 사용했지만
    //axios 사용하는 경우엔 response.data 를 사용해서 응답을 가져오면 됩니다. 
    const data = await response.data;
    console.log(data);
    setBoardList(data)
  };
  
  useEffect(()=>{
    getBoardList();
  }, [])

  return (
    <div>
       <BoardList boardList={boardList}/>
    </div>
  )
}

export default BoardListContainer