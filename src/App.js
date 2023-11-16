import React from 'react'
import { Footer, CoverPage, ProjectList } from './components';
import'./styles/App.css'

const App = () => {
  return (
    <div classname="App">
      <div classname="gradient_bg">
        <CoverPage />
        <ProjectList />
        <Footer />
      </div>
    </div>

  )
}

export default App
