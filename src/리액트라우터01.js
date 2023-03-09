import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
// import bg from './img/bg.png';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';
import Detail from './detail';

function App() {
  let [shoes] = useState(data);

  return (
    <div className='App'>
      {/* 
          라우터로 페이지 나누는 법 
          <Routes>
            <Route path='/' element={<div>메인임</div>} />
            <Route path='/detail' element={<div>상세페이지</div>} />
          </Routes> 

          path는 경로
          element는 해당 경로에 보여줄 컴포넌트

          리액트에서 a 태그를 쓰고 싶을때 라우터의 Link 태그를 사용
          Link 태그의 to 속성이 a 태그의 href 속성과 같음
      */}

      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Link className='text-muted' to='/'>
              Home
            </Link>
            <Link className='text-muted' to='/detail'>
              상세페이지
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

function Main({ shoes }) {
  return (
    <>
      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {shoes.map(function (it, i) {
            return <Product index={i} shoes={it} />;
          })}
        </div>
      </div>
    </>
  );
}

function Product({ index, shoes }) {
  return (
    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width={'80%'} />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}

export default App;
