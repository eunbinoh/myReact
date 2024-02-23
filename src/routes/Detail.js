import '../assets/style/App.css';
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import { Nav} from "react-bootstrap"
import { Context1 } from './../App.js';
import { useDispatch } from 'react-redux';
import { addCart } from './../store/cartSlice';
import Cart from './Cart.js';

/**  
 *  styled.html``  - custom html
 *  npm install styled-components
 *  장점 : 
 *   1. style css 에서 별도 적용하지 않아도 됨
 *   2. 스타일이 다른 js파일로 오염되지 않음 
 *   3. 페이지 로딩시간 단축 ( 페이지마다 module.css 로딩할 필요 x )    
 *   4. props에서 속성값으로 가져와서 재활용 가능
 */
let Box = styled.div
`
    background : gray;
    padding : 10px;
`

function Detail(props) {
  //URL 파라미터에 입력한 내용 가져오려면 useParams()
  let {id} = useParams();
  let { spare } = useContext(Context1);
  let dispatch = useDispatch();
  
  /**
   *  정렬바꾸기 버튼클릭시 shoes[] 순서도 바뀌어 영향이 있으므로,
   *  n번째로 찾아오는것이 아닌 id 매칭으로 찾아와서 일치할때만 정보 보여주게 함
   */
  let matchItem = props.shoes.find( x => x.id === id -1 )
  let buyCount = 0; //구매수량
  let [tab, setTab] = useState(0)

  /** 
   * 성능저하시 속도 개선 Tip ( react ver.18 이상 )
   * useTransition()
   * [ isPending, startTransition ]
   * isPending: startTransition(()=>{}) 처리중이면 true, 아니면 false ( boolean )  
   * onChange같은 브라우저내의 지연시간 줄여주기(중요작업 후 해당 기능 실행하도록 동작시점 늦게처리)
   */
  let [text, setText] = useState('') 
  let [isPending, startTransition] = useTransition()

  /**
   * 성능저하시 속도 개선 Tip 2
   * useDefferredValue(state)
   * (state)에 넣은 값 변경시 늦게처리해줌
   */
  // let lately = useDefferredValue(text)

  /** 
   * useEffect : html 렌더링 후 동작 (LifeCycle_ mount, update 실행과 같은 타이밍에 동작)
   * 적절한 사용 : 서버데이터 작업, 복잡한 반복 연산, 타이머 장착 등
   * Effect의 의미 : 함수의 핵심기능과 상관없는 부가기능 (side effect)
   * 
   * useEffect(()=> {} , []) : 더 정확한 useEffect 발생조건 부여
   *                  ex. [count] : count값 변경시 실행(용도 : A 감시에 따른 B update )
   * */

  return (
    <div className="detail-container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{matchItem.title} </h4>
            <p>{matchItem.content}</p>
            <p>{matchItem.price}원</p>
            <p> 현재고량 : {spare[1] } 개</p>
            <Box>
              수량 : <input type="number" onChange={(e)=>{ buyCount = e.target.value }} />
              <button 
                className="btn btn-danger"
                onClick={()=>{ dispatch(addCart({id:matchItem.id, name: matchItem.title, stock:buyCount})) }}
              > 주문하기
                <Routes >
                  <Route path="/cart" element={ <Cart /> } />
                </Routes>
              </button> 

              <div>
                메모 : 
                <input 
                  type="text" 
                  onChange={(e)=>{ 
                    startTransition(()=>{
                      setText(e.target.value)
                    })
                  }}
                /> 
                <br/> pending: {isPending ? 'true' : 'false'}
                <br/> text :{text} 
              </div>

            </Box>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(0)}} eventKey="link0">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(1)}} eventKey="link1">버튼2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(2)}} eventKey="link2">버튼3</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent shoes={props.shoes} tab={tab}/>
        
    </div> 
  )
}

function TabContent({shoes, tab}){
  return [<div>{shoes[tab].title}</div>, <div>{shoes[tab].title}</div>, <div>{shoes[tab].title}</div>][tab]
}

export default Detail;