import React from 'react'
import LotteryResultNumberShow from '../LotteryResultNumberShow/LotteryResultNumberShow'
import pareja from '../img/pareja.jpg'
import './Home.css'


function Home() {
  return (
    <div>
    <img  class='img' src={pareja} alt='pareja'/>
  
     <LotteryResultNumberShow/>
     
    </div>
  )
}

export default Home
