import './Advertise.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';


function App() {

  useEffect(()=>{
    AOS.init({duration:2000})
  }, [])
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="main-background">
      <section data-aos="fade-right" data-aos-offset="100">
        <div className='product-container-one'>
          <img src={require("./images/productFull.png")} className='product-img1' alt='product'/>
          <h1 className='product-name'>Iphone 12 pro</h1>
        </div>
      </section>
      <section data-aos="fade-left" data-aos-offset="200" style={{height:"700px"}}>
        <div className='product-container-two' data-aos="fade-left" data-aos-offset="200">
          <img src={require("./images/productTop.png")} className='product-img2' alt='product'/>
          <div className='product-two-description' data-aos="fade-left" data-aos-offset="300">
            <h1>Titanium Body</h1>
            <p>Apple's exploration into utilizing titanium for iPhone construction signifies a departure from traditional materials like aluminum and stainless steel. Renowned for its exceptional strength and lightweight properties, titanium promises enhanced durability and a premium feel. With its corrosion resistance and sleek aesthetic, a titanium-bodied iPhone could set a new standard for luxury and resilience in smartphone design. This material choice aligns with Apple's commitment to innovation and quality, potentially redefining the user experience for iPhone enthusiasts.</p>
          </div>
        </div>
      </section>
      <section data-aos="fade-right" data-aos-offset="200" style={{height:"700px",display:"flex"}}>
          <div className='product-three-description'>
              <h1 style={{textDecoration:"underline"}}>Key Specs</h1>
              <p>Front-Facing Camera: 12 megapixels</p>
              <p>Rear-Facing Camera: 12 megapixels</p>
              <h1 style={{textDecoration:"underline"}}>Display</h1>
              <p>Screen Size: 6.1 inches</p>
              <p>Screen Resolution: 2532 x 1170</p>
              <p>Screen Type: Super Retina XDR display</p>
              <h1 style={{textDecoration:"underline"}}>Processor</h1>
              <p>SOperating System :Apple iOS 14</p>
              <p>Processor Model: A14 Bionic chip with next-generation Neural Engine</p>
              <h1 style={{textDecoration:"underline"}}>Available In</h1>
              <p>128gb rom, 8gb ram---1,20,000₹</p>
              <p>256gb rom, 8gb ram---1,40,000₹</p>
          </div> 
        <div className='product-container-three' data-aos="fade-right" data-aos-offset="200">
          <img src={require("./images/productCamera.png")} alt="Cameras"/>
        </div>
      </section>
      <section data-aos="fade-left" data-aos-offset="200" style={{height:"700px", display:"flex", justifyContent:"center"}}>
        <div className='product-container-four' data-aos="fade-left">
          <img src={require("./images/productColors.png")} alt="colors" style={{height:"400px", width:"400px"}}/>
        </div>
        <div className='product-four-description'data-aos="fade-left">
        <h1 style={{textDecoration:"underline"}}>Colors Available</h1>
              <p style={{color:"#89b7ce", fontWeight:"bold"}}>⦾ Metal Blue</p>
              <p style={{color:"#fef2dd", fontWeight:"bold"}}>⦾ Gold</p>
              <p style={{color:"#aaaba1", fontWeight:"bold"}}>⦾ Gray</p>
              <p style={{color:"#fffff8", fontWeight:"bold"}}>⦾ White</p>

        </div>
      </section>
      <hr></hr>
      <footer data-aos="flip-up" data-aos-offset="20" data-aos-duration="1000">
      <p><a href="https://github.com/AzmatullaKhan">Copyright © All Rights Reserved 2024 Azmatulla Khan ®</a></p>
      </footer>
    </div>
  );
}

export default App;
