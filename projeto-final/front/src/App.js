import './App.css';
import {Routes, Route } from 'react-router-dom';
import Cadastro from './components/cadastro/cadastro';
import Login from './components/login/login';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <>
      <Header/>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <>
            <Login/>
            </>
          } />

          <Route path='/cadastro' element={
            <>
            <Cadastro/>
            </>
          } />
          <Route path='/home' element={
            <>
            <Home/>
            </>
          } />

        </Routes>
      </div>
    </>
  );
}

export default App;
