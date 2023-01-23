
import './App.scss';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import FormsPage from './pages/FormsPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>
      <Route path='/forms' element={<FormsPage></FormsPage>}></Route>
    </Routes>
  </>
  );
}

export default App;
