import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "./App.css"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h2>404 NOT FOUND</h2>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
