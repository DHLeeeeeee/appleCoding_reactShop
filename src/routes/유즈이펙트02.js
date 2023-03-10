import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
  let [count, setCount] = useState(0);

  let { id } = useParams();
  let shoesId = shoes.find((shoes) => shoes.id == id);

  let [alert, setAlert] = useState(true);
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(2);
    return () => {
      console.log(1);
      clearTimeout(a);
    };
  });
  // useEffect 실행조건 넣을 수 있는 곳은 [] (디펜던시)
  // mount 시에만 실행시키고 싶다면 디펜던시를 비움
  // mount,update 시에 실행시키려면 []를 없앰
  // uesEffect 안에 return을 넣을수 있는데 이 안의 코드는 useEffet 동작 전에 실행
  // mount시에는 실행 되지 않음 근데 unmount시에는 실행 됨

  /*
    빡통식 정리
    useEffect(()=>{  })    1. 재렌더링마다 코드실행하고 싶으면
    useEffect(()=>{  },[]) 2. mount시 1회 코드실행하고 싶으면
    useEffect(()=>{
      return () => {
        3.unmount시 1회 코드실행하고 싶으면
      }
    },[]) 
    4. useEffect 실행 전에 뭔가 실행하려면 언제나 return () => {}
    5. 특정 state 변경시에만 실행하려면 [state명]
  */

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
