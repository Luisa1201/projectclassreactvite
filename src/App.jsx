import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUseState'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseDebugValue from './playground/HookUseDebugValue'
import HookUseReducer from './playground/HookUseReducer'
import HookUseRef from './playground/HookuseRef'


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks />}></Route>
         <Route path='/useState' element={<HookUseState />}></Route>
         <Route path='/useNavigate' element={<HookUseNavigate />}></Route>
         <Route path='/useDebugValue' element={<HookUseDebugValue />}></Route>
         <Route path='/useReducer' element={<HookUseReducer />}></Route>
         <Route path='/useRef' element={<HookUseRef />}></Route>

         

      </Routes>
    </BrowserRouter>
  )
}

export default App

