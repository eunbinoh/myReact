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
  let [spare] = useState([10,11,12]);

  return (
    <div className="app">

      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Container>
          <Navbar.Brand href="/" className="nav-logo">WaterWater ex</Navbar.Brand>
          <Nav className="">
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
            <div className="main-bg"></div>
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
            <Context1.Provider className="component-container" value={{ spare }}>
              <Detail shoes={shoes}/> 
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
