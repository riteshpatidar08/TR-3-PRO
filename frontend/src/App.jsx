import {Routes,Route} from 'react-router-dom' 
import Signup from './pages/Signup'
import {Toaster} from 'sonner'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import PrivateRoute from './components/PrivateRoute'
export default function App() {
  return (
   <div>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>} />

      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Homepage/>}/>
      </Route>
      
    </Routes>
    <Toaster position="bottom-right" />
   </div>
  )
}