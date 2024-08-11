import React from 'react'
import images from '../assets/map.jpg'


const ContactPage = () => {

   
    
  return (
    <>
    <div>
        <img src={images} alt="map" width={1000} height={500} />
        <div>
            <h2>Contact Info</h2>
            <br /><br />
            <p>Primary-Base:2345666789</p>
            <br />
            <p>E-mail: <a href="www.google.com">ngo@gmail.com</a></p>
        </div>

    </div>
      
    </>
  )
}

export default ContactPage;
