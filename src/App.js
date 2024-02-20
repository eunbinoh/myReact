import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import { createContext, useState } from 'react';
import data from './data.js'
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';

/**
 * ContextAPI 를 사용하면 부모-자식-자식 데이터 사용시 props. 으로 전송하지 않아도 됨.
 * < ContextAPI Setting >
 * 1. createConText() 생성 - state 보관함
 * 2. 원하는 컴포넌트를 <Context.Provider> </Context.Provider>로 감싸기
 * 3. value={{ 전송State }}
 * 4. export Context -> import { Context} from 'App.js'
 * 5. let { 전송State } = useContext(Context1); 보관함에서 꺼내서 씀 (해체)
 * 
 * context API 단점 ) 1. state변경시 전부 재렌더링 2. 추후 컴포넌트 재사용이 어려움
 */
export let Context1 = createContext()

/**
 *  Redux : props 없이 state를 공유할 수 있게 도와주는 라이브러리. 
 *  js 파일 하나에 state들을 보관 가능,
 *  모든 컴포넌트가 직접 꺼내서 사용가
 * < Redux Setting > 
 * 1. npm install @reduxjs/toolkit react-redux
 * 2. store.js (state 보관함 생성) - reducer
 * 3. inedex.js에서 [ Provider & store.js ] import 하고
 *    <Provider store={store}> </Provider> 로 <App> 감싸기
 *  
 */


function App() {
  let [shoes, setShoes] = useState(data);
  let [spare] = useState([10,11,12]);
  // let [pdId, setPdId] = useState();
  let navigate = useNavigate();

  return (
    <div className="app">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/1') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div>메인</div>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
              { shoes.map((shoe, i) => {
                  return ( 
                    <Card shoe={shoe} key={i} i={i+1} ></Card> 
                  )
                })
              }
            </div>
          </div>
          <button onClick={()=>{ 
            let url = shoes.length < 7 ? 'https://codingapple1.github.io/shop/data2.json' : 'https://codingapple1.github.io/shop/data3.json'

            axios.get(url)
             .then((res) => {
                let clipShoes = [...shoes];

                res.data.forEach(data => {
                  clipShoes.push(data);
                  setShoes(clipShoes);
                });
             })
             .catch(()=>{
                console.log('axios fail')
             })
            }}>더보기</button>
          </>
          } />
        <Route 
          path="/detail/:id" 
          element={ 
            <Context1.Provider value={{ spare }}>
              <Detail shoes={shoes}/> 
            </Context1.Provider>
          } 
        />
        <Route path="/cart" element={ <Cart /> } />

        <Route path="/about" element={ <About /> } >
          <Route path="member" element={ <div>멤버정보</div> } />
          <Route path="location" element={ <div>위치정보</div> } />
        </Route>
          {/*
            Nested routes : 상위경로를 공유하는 라우터 하위에 한해서 "/path" 생략해서 사용
            Nested element 들을 구성할때 <Outlet> </Outlet> 사용해서 배치 용이
            <Route path="/about/member" element={ <About /> } />
            <Route path="/about/location" element={ <About /> } /> 
          */}
        {/* <Route path="*" element={ <div>404</div> } /> */}
      </Routes>

    </div>
  );
}

/** Card Component */
function Card(props) {
  let navigate = useNavigate();
  return (
    <div className="col-md-4" onClick={()=>{ navigate(`/detail/${props.i}`) }}>
      <img 
        src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} 
        width="80%" 
      />
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.content}</p>
      <p>${props.shoe.price} </p>
    </div>
  ) 
}

function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
