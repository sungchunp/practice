import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>헤더작업</div>
     <Routes>
      <Route path='/' element={<div>메인페이지</div>} />
      <Route path='/new' element={<div>새글페이지</div>} />
      <Route path='/edit' element={<div>수정페이지</div>} />
     </Routes>
     <div>푸터작업</div>
    </div>
  );
}

export default App;
