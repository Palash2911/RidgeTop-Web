import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes ,Route} from 'react-router'
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-poppins font-normal h-auto overflow-x-hidden flex flex-col justify-center items-center'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
