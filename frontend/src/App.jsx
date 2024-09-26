import {Routes,Route} from 'react-router-dom' 
import Signup from './pages/Signup'
import {Toaster} from 'sonner'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard'
import GoogleHandler from './components/GoogleHandler'
import Product from './components/Dashboard/Product'
export default function App() {
  return (
   <div>
   <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google/callback" element={<GoogleHandler />} />

         <Route element={<PrivateRoute allowrole={['user', 'admin']} />}>
          <Route path="/" element={<Homepage />} />
        </Route>

        {/* <Route element={<PrivateRoute allowrole={['user']} />}>
          <Route path="/" element={<Homepage />} />
        </Route> */}

        <Route element={<PrivateRoute allowrole={['admin']} />}>
         
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Product />} />
            <Route path="products" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    <Toaster position="bottom-right" />
   </div>
  )
}