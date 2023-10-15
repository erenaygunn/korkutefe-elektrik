import React from 'react';
import "./hizmetler.css"
import Card from '../Card/Card';
import cable from "../../images/cable.png"
import fix from "../../images/fix.png"
import transformer from "../../images/transformer.png"
import bulb from "../../images/bulb.png"

const Hizmetler = () => {

  return (
    <section className='hizmetler' id='hizmetler'>
        <h5 data-aos="fade-up">HİZMETLER</h5>
        <div className="hizmet-cards">
          <div className='responsive-row'>
            <Card icon={transformer} title='Trafo Kiralama'>Elektrikçi olarak, trafo kiralama hizmeti sunuyoruz. İhtiyacınıza uygun trafo seçenekleri ve güvenilir ekipmanlarla, enerji dağıtımınızı kolaylaştırıyoruz. Kiralama sürecimiz hızlı ve uygun maliyetli olup, müşterilerimize güçlü bir enerji kaynağı sunmamızı sağlar. Elektrik enerjisi ihtiyaçlarınızı en verimli şekilde karşılıyoruz.</Card>
            <Card icon={cable} title='Elektrik Bağlama'>Elektrik bağlama hizmetimizle elektrik ihtiyaçlarınıza profesyonel ve güvenilir çözümler sunuyoruz. Deneyimli ekibimiz, elektrik tesisatı kurulumlarından priz ve anahtar montajlarına kadar geniş bir yelpazede hizmet verir. Elektrik bağlamada güvenli ve düzenli bağlantıları sağlamak için buradayız, elektrik projelerinizde yanınızdayız.</Card>
          </div>
          <div className='responsive-row'>
            <Card icon={bulb} title='Malzeme Satışı'>Elektrik malzeme satışı hizmetimizle, elektrik projeleriniz için gerekli olan kaliteli malzemeleri sunuyoruz. Geniş ürün yelpazemizde prizlerden kablolar ve cihazlara kadar her türlü elektrik malzemesini uygun fiyatlarla temin edebilirsiniz. Elektrik ihtiyaçlarınıza güvenilir ve ekonomik çözümler sunuyoruz.</Card>
            <Card icon={fix} title='Arıza Giderme'>Arıza giderme hizmetimizle elektrik sorunlarınızı hızlı ve güvenilir bir şekilde çözüyoruz. Deneyimli ekibimiz, elektrik kesintilerini teşhis eder, onarımları hızla yapar ve kesintisiz enerji sağlar. Elektrik sistemlerinizde güvenilirlik ve sürekli işlerlik sağlamak için buradayız.</Card>
          </div>
        </div>
        <p>Sunduğumuz diğer hizmetler dahil olmak üzere bilgi almak için <a href='#iletisim'> bize ulaşın.</a></p>
    </section>
  )
}

export default Hizmetler