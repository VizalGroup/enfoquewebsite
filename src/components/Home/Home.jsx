import React from 'react'
import LotteryResultNumberShow from '../LotteryResultNumberShow/LotteryResultNumberShow'
import logo from '../img/bicienfoque.jpg'
import PlanesHome from '../PlanesHome/PlanesHome'

import './Home.css'






function Home() {
  return (
    <>
      <div className="img-container">
        <img className="img" src={logo} alt="pareja" />
        <div className="text-overlay">Consigue tu casa<br/>tu moto, tu auto lo que necesites.
     <div>
     <LotteryResultNumberShow/>

     </div>
  
      
        
       
        </div>
        
      </div>
      <div >
<PlanesHome/>
     </div>
      </>
  );
}

export default Home;

