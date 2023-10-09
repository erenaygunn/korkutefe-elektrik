import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Hizmetler from './components/Hizmetler/Hizmetler'
import Projeler from './components/Projeler/Projeler'
import iletisim from './components/iletisim/iletisim'


function App() {

  return (
    <div>
      <Hero></Hero>
      <Hizmetler></Hizmetler>
      <Projeler></Projeler>
      <iletisim></iletisim>
    </div>

  )
}

export default App
