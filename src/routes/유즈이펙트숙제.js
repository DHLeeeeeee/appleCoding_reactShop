import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail({ shoes }) {
  let { id } = useParams();
  let shoesId = shoes.find((shoes) => shoes.id == id);
  // input에 숫자이외의 것을 넣으면 경고창 뜨게하기
  // 일단 input값을 넣을 state를 만든다
  let [num, setNum] = useState(0);
  // useEffect를 사용해서 [num]으로 설정함
  // 그러면 num state가 변화할때마다 해당 코드가 실행됨
  useEffect(() => {
    // isNaN(num) 숫자가 들어가면 false 숫자 이외의 값이 들어가면 true를 반환함
    if (isNaN(num)) {
      alert('그러지마셈');
    }
  }, [num]);

  return (
    <div className='container'>
      {/* input에 값을 입력하면 setNum함수로 num이라는 stare에 넣음 */}
      <input type='text' onChange={(e) => setNum(e.target.value)} />
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
