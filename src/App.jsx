import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero/Hero'
import Hizmetler from './components/Hizmetler/Hizmetler'
import Projeler from './components/Projeler/Projeler'
import Iletisim from './components/iletisim/iletisim'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Hero></Hero>
      <Hizmetler></Hizmetler>
      <Projeler></Projeler>
      <Iletisim></Iletisim>
      <Footer></Footer>
    </div>

  )
}

export default App
