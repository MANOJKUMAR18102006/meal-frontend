import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ToastContainer } from "react-toastify"
import HomeLayout from './layout/HomeLayout.jsx'
import LoginForm from './component/LoginForm.jsx'
import SignupForm from './component/SignupForm.jsx'
import Feedback from './component/Feedback.jsx'
import MealList from './component/MealList.jsx'
import AdminPage from './component/AdminPage.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import ProtectedRoute from './component/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<App />}/>
                <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/meals" element={<ProtectedRoute><MealList /></ProtectedRoute>}/>
            </Route>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/signup' element={<SignupForm/>}/>
        </Routes>
    </BrowserRouter>
  </>
)
