import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero/Hero'
import Hizmetler from './components/Hizmetler/Hizmetler'
import Projeler from './components/Projeler/Projeler'
import Iletisim from './components/iletisim/iletisim'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function App() {

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Hero></Hero>
      <Hizmetler></Hizmetler>
      <Projeler></Projeler>
      <Iletisim></Iletisim>
    </div>

  )
}

export default App
