import './App.css'
import image from '../public/images/image-equilibrium.jpg'
import image1 from '../public/images/icon-ethereum.svg'
import image2 from '../public/images/icon-clock.svg'
import image3 from '../public/images/image-avatar.png'
function App() {
 

  return (
    <>
      <div className='box'>
        <div className='image'>
          <img src={image} alt="" />
        </div>
        <div className='titre'>
          <h1>Equilibrium #3429</h1>
        </div>
        <div className='texte'>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
      <div className='info'>
        <div className='vert'> 
          <img src={image1} alt="" />
          <p>0.041ETH</p>
        </div>
        <div className='gris'> 
          <img src={image2} alt="" />
          <p> 3 days left </p>
        </div>
      </div>
      <div className='ligne'>
      </div>
      <div className='footer'> 
          <img src={image3} alt="" />
          <p> Creation of  <span> Jules Wyvern</span> </p>
        </div>
      </div>
    </>
  )
}

export default App
{/* <div className="box">
  <div className="image-container">
    <img src="images/image-equilibrium.jpg" alt="NFT" className="main-image" />
    <div className="hover-layer">
      <img src="images/icon-view.svg" alt="view icon" className="view-icon" />
    </div>
  </div>

  <div className="titre">
    <h1>Equilibrium #3429</h1>
  </div>

  <div className="texte">
    <p>Our Equilibrium collection promotes balance and calm.</p>
  </div>

  <div className="info">
    <div className="vert">
      <img src="images/icon-ethereum.svg" alt="eth" />
      <p>0.041 ETH</p>
    </div>
    <div className="gris">
      <img src="images/icon-clock.svg" alt="clock" />
      <p className="hover-blue">3 days left</p>
    </div>
  </div>

  <div className="ligne"></div>

  <div className="footer">
    <img src="images/image-avatar.png" alt="avatar" />
    <p>Creation of <span className="hover-blue">Jules Wyvern</span></p>
  </div>
</div> */}