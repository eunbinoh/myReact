import './assets/style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation  } from 'react-router-dom'
import Home from './routes/Home.js';

import Project_1 from './views/Project_1.js'
import Project_2 from './views/Project_2.js'
import Project_3 from './views/Project_3.js'

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="app">
      {
        JSON.stringify({pathname}).indexOf('proj_') < 0 ? <Home /> : null
      }
       
      <Routes>
        <Route path="/proj_metahub" element={ <Project_1 /> } /> 
        <Route path="/proj_metahub" element={ <Project_2 /> } />
        <Route path="/proj_metahub" element={ <Project_3 /> } />
      </Routes>
    </div>
  );
}

export default App;
