import styled from "styled-components";
import { useState, memo, useMemo } from 'react';
import { Table } from 'react-bootstrap' ;
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './../store/userSlice';
import { allPlus, plusStock } from './../store/cartSlice';

function sampleCase () {
  return "sample"
}


function Cart(){
  /**
   * uesMemo() : 컴포넌트 렌더링시 1회만 함수 실행
   *  - computed()와 용도가 비슷
   *  - useEffect()와 사용법 비슷
   *  - useMemo(()=> {return 함수()}), [특정값 변경시 실행지정] ) : watchEffect와 비슷
   */
  let sampleUse = useMemo(()=>{return sampleCase()})
  
  let userStore = useSelector((state)=> state.user )
  let cartStore = useSelector((state)=> state.cart )
  let dispatch = useDispatch() //store.js에 요청 보내는 함수

  let [count, setCount] = useState(0)

  return (
    <div>
      <Child></Child>
      <CustomBtn onClick={()=>{setCount(count+1)}}>++</CustomBtn>

      <h4> { userStore.name} 의 장바구니 </h4>
      <button onClick={()=>{ dispatch(changeName())}}>UserChange</button>
      <button onClick={()=>{ dispatch(allPlus(10)) }} style={{marginLeft:420}}>전체입고</button>
      <Table>
        <thead>
          <tr>
            <th># </th>
            <th>상품명</th>
            <th>수량</th>
            <th>창고</th>
            <th>담당자</th>
          </tr>
        </thead>
        <tbody>
          {
            cartStore.map((cart, i) =>
              <tr key={i} >
                <td>{cart.id+1}</td>
                <td>{cart.name}</td>
                <td>{cart.stock}</td>
                <td>{cart.stock>0 ? '재고보유' : '품절'}</td>
                <td>
                  <button onClick={()=>{ dispatch(plusStock(cart))}}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table> 
    </div>
  )
} 

let Child = memo( function() {
  return <div>ChildBtn</div>
})


let CustomBtn = styled.button
`
  color:orange;
  width:80px;
  border : 2px solid orange;
`

export default Cart;