import './App.css';
import Home from './components/Home/Home';
import LotteryResultNumberShow from './components/LotteryResultNumberShow/LotteryResultNumberShow';
import { Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav'

function App() {
  return (
    <div >
     <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path='/loterry' element={<LotteryResultNumberShow/>}/>
      </Routes>
    </div>
  );
}

export default App;
