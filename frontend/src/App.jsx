import {Routes,Route} from 'react-router-dom' 
import Signup from './pages/Signup'

export default function App() {
  return (
   <div>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
    </Routes>
   </div>
  )
}