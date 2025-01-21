import ClassCompEG from './components/components/classComponents/ClassCompEG'
import About from './components/components/FunctionalComponents/About'
import Constact from './components/components/FunctionalComponents/Contact'
import Gallery from './components/components/FunctionalComponents/Gallery'
import Home from './components/components/FunctionalComponents/Home'
import Navbar from './components/components/FunctionalComponents/Navbar'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
 function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
      </Routes>
      </BrowserRouter>
    <section>
    <Home/>
    <About/>
    <ClassCompEG/>
    <Gallery image="sece Logo" page="Gallery"/>
    <Constact/>
    </section>
    </>
)
}

export default App