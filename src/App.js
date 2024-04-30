import './assets/style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route, useNavigate} from 'react-router-dom'
import { createContext, useState } from 'react';
import item from './data/item.js'
import Items from './routes/Items.js';
import Detail from './routes/Detail.js';
import Post from './routes/Post.js';
import Mine from './routes/Mine.js';
import About from './routes/About.js';

export let Context1 = createContext()

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(item);
  // let [spare] = useState([10,11,12]);

  return (
    <div className="app">

      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Container>
          <Navbar.Brand href="/" className="nav-logo">WaterWater ex</Navbar.Brand>
          <Nav className="nav-menu">
            <Nav.Link onClick={()=> navigate('/items')}>ITEM</Nav.Link>
            <Nav.Link onClick={()=> navigate('/post')}>POST</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/mine') }}>MINE</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <div className="main-container">
              <div className="context">
                <div className="main">
                  <span className="title">Water Water Exchange ?</span>
                  <span > <p>"물물교환" </p>을 키워드로,</span>
                  <span > <p>Item-Item</p> 거래를 통해 버려지는 생활쓰레기를 줄이고</span>
                  <span > 사고팔기의 사이클 속에서 낭비되는 시간과 소비를 줄임으로써</span>
                  <span > <p>` Excercise to Saving Time & Property ` </p></span>
                  <span > 물 흘러가듯 좋은 운동을 만들자는 중의적 뜻을 품고</span>
                  <span > <p>물건거래 사이트</p>를 제작하게 되었습니다.</span>
                </div>
                
                <div className="sub">
                  <span className="title-point">@Point </span>
                  <span>1. 물건의 가격이 아닌, 상대방의 수요가 교환물건의 가치를 결정</span>
                  <span>2. 교환되어 소유자가 바뀐 물건은 다시 재거래&기록 확인 가능</span>
                  <span>3. 댓글로 경매 시스템 유사 교환가치를 설득 or 협의 가능</span>
                  <span>4. 일상 포스팅을 통한 사용자 감성과 아이템 스토리 공유</span>
                  <span className="title-proceed">@Proceeding </span>
                  <span >-  거래완료 전 예약확정 상태로 1:1 채팅기능 제공 예정 </span>
                  <span >-  거래완료 후 직거래/택배/등 교환시스템 제외 </span>
                </div>
              </div>
          </div>
          } 
        />
        <Route 
          path="/items" 
          element={ 
            <Context1.Provider className="component-container" value={{ }}>
              <Items /> 
            </Context1.Provider>
          } 
        />
        <Route 
          path="/detail/:id" 
          element={ 
            <Context1.Provider className="component-container" value={{ }}>
              <Detail /> 
            </Context1.Provider>
          } 
        />
        <Route 
          path="/post" 
          element={ 
            <Context1.Provider className="component-container" value={{ }}>
              <Post /> 
            </Context1.Provider>
          } 
        />
        <Route 
          path="/mine" 
          element={ 
            <Context1.Provider className="component-container" value={{ }}>
              <Mine /> 
            </Context1.Provider>
          } 
        />
        <Route 
          path="/about" 
          element={ 
            <Context1.Provider className="component-container" value={{ }}>
              <About /> 
            </Context1.Provider>
          } 
        />

        {/* <Route path="*" element={ <div>404</div> } /> */}
      </Routes>
    </div>
  );
}

export default App;
