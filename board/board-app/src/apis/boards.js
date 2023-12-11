import axios from 'axios';
// [1]목록
export const list = ()=>{ return axios.get('/boards')} 
//  '/boards' : 절대경로 할 땐 npm create-react-app으로 생성했으면 
//기본적 요청경로를 package.json에서 설정해줄 수 있음 
//[2] 조회
export const select = (no)=>{return axios.get(`/boards/${no}`)}
//[3] 등록
export const insert = (title, writer, content)=>{return axios.post("/boards", {title, writer, content}) }
//[4] 수정
export const update = (no, title, writer, content)=>{return axios.put("/boards", {no, title, writer, content}) }
// [5] 삭제
export const remove = (no)=>{return axios.delete(`/boards/${no}`) }


