
import { Route, Routes } from 'react-router';
import './App.css'
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';

function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}


export default App;