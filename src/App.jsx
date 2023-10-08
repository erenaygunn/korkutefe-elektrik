import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Hizmetler from './components/Hizmetler/Hizmetler'
import Projeler from './components/Projeler/Projeler'


function App() {

  return (
    <div>
      <Hero></Hero>
      <Hizmetler></Hizmetler>
      <Projeler></Projeler>
    </div>

  )
}

export default App
