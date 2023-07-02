import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
     <h1>in react</h1>

    <Routes>
      <Route path='/' element={<ProductTable/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
