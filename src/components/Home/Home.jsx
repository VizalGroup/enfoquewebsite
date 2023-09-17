import React from 'react'
import LotteryResultNumberShow from '../LotteryResultNumberShow/LotteryResultNumberShow'
import logo from '../img/bicienfoque.jpg'
import PlanesHome from '../PlanesHome/PlanesHome'
import PaymentMethods from '../PaymentMethods/PaymentMethods'

import './Home.css'
import Trabaja from '../Trabaja/Trabaja'



function Home() {
  return (
    <>
      <div className="img-containers">
        <img className="img" src={logo} alt="pareja" />
        <div className="text-overlay">Consigue tu casa<br/>tu moto, tu auto lo que necesites.
        </div>
      </div>
      <div  >
     <LotteryResultNumberShow/>
     </div>
     <div>
    <PlanesHome/>
    </div>
    <div>
      <PaymentMethods/>
    </div>
    <div>
      <Trabaja/>
    </div>
      </>
  );
}

export default Home;



 


  
      
        
       
        

