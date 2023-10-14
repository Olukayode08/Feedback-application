import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import Feedbackpage from './pages/Feedbackpage'
import Feedback from './components/Feedback'
import AboutIconLink from './components/AboutIconLink'
// import LearnUseParams from './pages/LearnUseParams'
function App() {


  return (
    <>
      <Feedback />
      <Routes>
        <Route exact path='/' element={<Feedbackpage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/post' element={<LearnUseParams />} /> */}
      </Routes>
      <AboutIconLink /> 
    </>
  )
}

export default App
