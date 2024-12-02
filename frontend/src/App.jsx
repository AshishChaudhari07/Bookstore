import React from 'react';
import Home from './home/Home';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Content from './components/Content';
import About from './components/About';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authProvider';
import BookDetails from './bookDetail/BookDetail';
import Search from './components/Search';

function App() {
  const [authUser,setAuthUser] = useAuth()
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup'/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/content' element={<Content/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/book/:query" element={<Search/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
    </>
  )
}

export default App
