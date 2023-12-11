import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BoardUpdateForm from '../components/BoardUpdateForm'
import * as boards from '../apis/boards'

const BoardUpdateContainer = () => {
  const {no} = useParams()
  const [board, setBoard] = useState({})
  const navigate = useNavigate()
  //수정 함수 내려줄거임
  const updateOn = async (no, title, writer, content)=>{
      const response = await boards.update(no, title, writer, content)
      console.log(response.data)
      alert('수정 완료')
      navigate('/boards')
  }

  const getBoard = async ()=>{
    try {
      const response = await boards.select(no)
      const data = response.data
      console.log(data)
      setBoard(data)
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async (no)=>{
    const response = await boards.remove(no);
    console.log(response.data);
    alert('삭제 완료')
    navigate('/boards')
  }

    //왜 해주는건지 모르겠음
  useEffect(()=>{ getBoard() }, [])

  return <BoardUpdateForm updateOn={updateOn} no={no} board={board} onDelete={onDelete}/>
  
}

export default BoardUpdateContainer