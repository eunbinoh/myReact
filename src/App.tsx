import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/style/App.scss';
import Home from './routes/Home';
import Items from './routes/Items';
import Mine from './routes/Mine';
import Post from './routes/Post';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/mine" element={<Mine />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
