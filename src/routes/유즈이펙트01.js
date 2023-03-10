import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* 
  컴포넌트의 Lifecycle
  1. 페이지에 장착되기도 하고(mount)
  2. 가끔 업데이트도 되고 (update)
  3. 필요없으면 제거되고 (unmount)
*/

function Detail({ shoes }) {
  // Detail 컴포넌트가 mount,update 될 때 밑의 코드가 실행됨
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });
  // useEffect 쓰는 이유
  // useEffect 안에 있는 코드는 html 렌더링 후에 동작함
  // 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착하는거

  let [count, setCount] = useState(0);

  let { id } = useParams();
  let shoesId = shoes.find((shoes) => shoes.id == id);

  return (
    <div className='container'>
      {alert == true ? <div className='alert alert-warning'>2초이내 구매시 할인</div> : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        버튼
      </button>
      <div className='row'>
        <div className='col-md-6'>
          <img src={`https://codingapple1.github.io/shop/shoes${shoesId.id + 1}.jpg`} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{shoesId.title}</h4>
          <p>{shoesId.content}</p>
          <p>{shoesId.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
