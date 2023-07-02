import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<EmployeeTable/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
