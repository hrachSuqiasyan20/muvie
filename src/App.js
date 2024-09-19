import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/header/home';

function App() {
  return (
    <>
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
