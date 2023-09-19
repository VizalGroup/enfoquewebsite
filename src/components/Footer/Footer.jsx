import React from 'react'
import './Footer.css'
import {CiFacebook, CiInstagram} from 'react-icons/ci'


function Footer() {
  return (
    <div id='footer'>
      <footer className='footer'>
soy footer
      </footer>
      <div className='redes'>
        <a style={{ color: 'black' }} href='https://www.facebook.com/profile.php?id=61550619271586' >
<CiFacebook/>
        </a>
        <a style={{ color: 'black' }}  href='https://www.instagram.com/enfoque.chubut/?hl=es-la'>
<CiInstagram/>
        </a>
</div>
    </div>
  )
}

export default Footer
