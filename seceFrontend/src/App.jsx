import ClassCompEG from './components/components/classComponents/ClassCompEG'
import About from './components/components/FunctionalComponents/About'
import Constact from './components/components/FunctionalComponents/Contact'
import Gallery from './components/components/FunctionalComponents/Gallery'
import Home from './components/components/FunctionalComponents/Home'

function App() {
  return (
    <section>
    <Home/>
    <About/>
    <ClassCompEG/>
    <Gallery image="sece Logo" page="Gallery"/>
    <Constact/>
    </section>
)
}

export default App