import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardRead from '../components/BoardRead'

const BoardReadContainer = () => {
    const {no} = useParams()
    console.log(no, '넘버')
    //const [board, setBoard] = useState({no:'none',title:'none',writer:'none',content:'none',regDate:'none',updDate:'none',});
    const [board, setBoard] = useState({});
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

  useEffect(()=>{ 
    getBoard() 
  }, [])
  
  return (
    <BoardRead no={no} board={board}/>
  )
}

export default BoardReadContainer