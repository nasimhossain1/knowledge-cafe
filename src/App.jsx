import { useState } from 'react'

import './App.css'
import Header from './components/Headers/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  

  return (
    <>  
     <Header></Header>
     <div>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
