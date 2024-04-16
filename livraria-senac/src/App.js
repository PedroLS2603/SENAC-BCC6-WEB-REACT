import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar o componente Routes
import MaisBuscados from './Components/maisBuscados/maisBuscados';
import MenuBar from './Components/navbar/MenuBar';
import Pesquisa from './Components/pesquisa/Pesquisa';
import Cadastro from './Components/cadastro/cadastro';

function App() {
  return (
    <div className='App'>
      <MenuBar />
      <Routes>
        <Route path='/' element={
          <>
            <header className='App-header'>
              <MaisBuscados />
              <Pesquisa />

            </header>
          </>
        } />

        <Route path='/cadastro' element={
          <>
          <Cadastro />
          </>
        } />

      </Routes>
    </div>
  );
}

export default App;
