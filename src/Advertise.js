import './Advertise.css';
function App() {
  return (
    <div className="main-background">
      <center><div className='product-container-one'>
        <img src={require("./images/productFull.png")} className='product' alt='product'/>
        <h1 className='product-name'>Iphone 12 pro</h1>
      </div></center><br></br>
      <center><div className='product-container-two'>
        {/* <img src={require("./images/productFull.png")} className='product' alt='product'/> */}
      </div></center>
    </div>
  );
}

export default App;
