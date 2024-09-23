import {Routes,Route} from 'react-router-dom' 
import Signup from './pages/Signup'
import {Toaster} from 'sonner'
import Login from './pages/Login'
export default function App() {
  return (
   <div>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Toaster position="bottom-right" />
   </div>
  )
}