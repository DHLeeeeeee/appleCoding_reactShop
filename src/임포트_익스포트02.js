// let a = 10;

// export default a;
// 다른 파일에서 만든 데이터를 사용하고 싶을때는 import export 문법을 사용한다
// 데이터가 있는 파일에서 export default 변수명 으로 자료를 내보내고
// 사용할 파일에서 import 작명 from '데이터파일 경로'로 받아와서
// 작명한 변수명으로 데이터를 사용 할 수 있다

// let a = 10;
// let b = 100;

// export { a, b };

// 여러개의 데이터를 export 하고 싶을때는
// export { 변수1, 변수2 }
// 사용할 파일에서 import {변수1, 변수2} from '경로'
// 이 때에는 import 한 곳에서 마음대로 작명을 할 수 없고
// export 한 변수명을 그대로 import 해서 사용해야 함

let data = [
  {
    id: 0,
    title: 'White and Black',
    content: 'Born in France',
    price: 120000,
  },

  {
    id: 1,
    title: 'Red Knit',
    content: 'Born in Seoul',
    price: 110000,
  },

  {
    id: 2,
    title: 'Grey Yordan',
    content: 'Born in the States',
    price: 130000,
  },
];

export default data;
