import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
// import bg from './img/bg.png';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {
  let [shoes] = useState(data);
  // 페이지 이동도와주는 함수 useNavigate()
  // html onClick 속성에 useNavigate('경로')를 사용하면 해당 경로로 페이지 이동 됨
  // 경로에 숫자를 적으면 해당 숫자만큼 페이지 수를 이동한다 (-1을 적으면 뒤로가기 버튼이 되는거임)
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            {/* <Link className='text-muted' to='/'>
              Home
            </Link>
            <Link className='text-muted' to='/detail'>
              상세페이지
            </Link> */}
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} />} />
        <Route path='/detail' element={<Detail />} />
        {/* 경로에 *을 적으면 설정된 경로 이외의 모든 경로를 뜻함 (404페이지 만들기 쌉가능) */}
        <Route path='*' element={<div>없는페이진데요</div>} />

        {/* 
        // 여러 단계의 페이지를 만들고 싶을때
        <Route path='/about' element={<About />} />
        // 경로에 여러개의 /가 있어도 상관없음
        <Route path='/about/member' element={<About />} />
        <Route path='/about/location' element={<About />} /> 
        */}

        {/* Nested Routes를 사용하면 경로를 훨씬 직관적으로 작성가능 */}
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버소개임</div>} />
          <Route path='location' element={<div>회사위치임</div>} />
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
        </Route>
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

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      {/* 
      Nested Routes를 사용하면 하위페이지에서 상위 페이지를 같이 보여주게 된다
      상위페이지 컴포넌트에 <Outlet></Outlet>을 사용해서 하위페이지 컴포넌트 위치를 지정해줘야함
      */}
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

export default App;
