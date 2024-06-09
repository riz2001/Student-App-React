import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';

import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<AddStudent/>}/>
     <Route path='/search' element={<SearchStudent/>}/>
     <Route path='/delete' element={<DeleteStudent/>}/>
     <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  
  
 
  );
}

export default App;
