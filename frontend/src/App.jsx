import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home/Home'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/movie/add' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
