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
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} />} />

        {/* 상세페이지를 많이 만들어야 한다면 :URL파라미터 사용 */}
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />

        <Route path='*' element={<div>없는페이진데요</div>} />

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
