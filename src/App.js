import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home/Home'
import Filter from './Component/Filter/Filter'
import Sale from './Component/Sale/Sale'
import Blog from './Component/Blog/Blog'
import Info from './Component/Info/Info'
import Header from './Component/Header/Header'
import Error from './Component/Error/Error'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/filter' element={<Filter/>}/>
            <Route exact path='/sale' element={<Sale/>}/>
            <Route exact path='/blog' element={<Blog/>}/>
            <Route exact path='/info' element={<Info/>}/>
            <Route exact path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App