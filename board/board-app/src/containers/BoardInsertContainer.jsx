import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardInsertForm from '../components/BoardInsertForm'
const BoardInsertContainer = () => {
  const navigate = useNavigate()
  //함수를 내려줌.
  const onInsert = async (title, writer, content) => {
    try {
      const response = await boards.insert(title, writer, content)
      alert('등록 성공')
      console.log(response.data)
    } catch(e) {
      console.log(e)
    }
    //게시글 목록으로 이동
    navigate('/boards')
  }
  return (
    <div>
        <BoardInsertForm onInsert={onInsert}/>
    </div>
  )
}

export default BoardInsertContainer