import React from 'react'
import LotteryResultNumberShow from '../LotteryResultNumberShow/LotteryResultNumberShow'
import pareja from '../img/pareja.jpg'
import './Home.css'






function Home() {
  return (
    <div >
      <div className="img-container">
        <img className="img" src={pareja} alt="pareja" />
        <div className="text-overlay">Consigue tu casa<br/>tu moto, tu auto lo que necesites.
        <br/> 
        
     <LotteryResultNumberShow/>
       
        </div>
      </div>
      <div className="component">
      </div>
    </div>
  );
}

export default Home;

