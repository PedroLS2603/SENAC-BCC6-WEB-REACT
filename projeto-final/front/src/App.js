import './App.css';
import {Routes, Route } from 'react-router-dom';
import Cadastro from './components/cadastro/cadastro';
import Login from './components/login/login';
import Header from './components/header/header';

function App() {
  return (
    <div className='App'>
      <Header/>
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

      </Routes>
    </div>
  );
}

export default App;
