import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Blog from './pages/Blog'

const App = () => {
  return (
    <main className='overlow-hidden text-tertiary'>
      <h1>Hello</h1>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>

    </main>


  )
}

export default App 
