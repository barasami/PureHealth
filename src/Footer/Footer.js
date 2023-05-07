import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    let today=new Date().getFullYear()
  return (
    <div className='footer'>
        <div className='content'>
            <div className='icones'>
                <div className='whatsapp'>
                    <a href="https://wa.me/+254748635972" target='_blank' rel="noreferrer"><WhatsAppIcon color='inherit' className='icon'/></a> 
                </div>
                <div className='instagram'>
                    <a href='https://www.instagram.com/onyangomicheal/?igshid=ZDdkNTZiNTM%3D' target='_blank' rel="noreferrer"><InstagramIcon color='inherit' className='icon'/></a>
                </div>
                <div className='twitter'>
                    <a href='https://twitter.com/BarasaOMicheal?t=iUttpH1rbARWB9pgEO8sJw&s=08' target='_blank' rel="noreferrer"><TwitterIcon color='inherit' className='icon'/></a> 
                </div>
            </div>
           
        </div>
        <div className='right'>
            <p>&copy;purehealth ,{today} All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer