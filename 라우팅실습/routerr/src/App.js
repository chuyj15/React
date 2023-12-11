import React, { useState, Redirect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 // const navigate =  useNavigate();
 return (
   <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/admin"
          //element={isLoggedIn ? <Admin /> : <Login />}
          element={isLoggedIn ? <Admin /> : <Navigate to="/login" />}
        />
        <Route path="/boards/:id" element={<Board />} />
        <Route path="/boards/:id/delete" redirect="/boards" />
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h1>홈페이지</h1>;
};
const Board = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시물 조회</h2>
      <p>게시물 ID: {id}</p>
    </div>
  );
};
const Admin = () => {
  return <h1>관리자 페이지</h1>;
};
const Login = ()=>{
  return <h1>로그인하세요</h1>
}

export default App;