import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"
import {faFacebook,faYoutube,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons"


export default function profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
            <div className='colz'>
                <a href='https://www.facebook.com/dema.amano.3/'>
                <FontAwesomeIcon icon = {faFacebook}></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com/demaamano/'>
                <FontAwesomeIcon icon = {faInstagram}></FontAwesomeIcon>
                </a>
                <a href='https://www.youtube.com/channel/UCX9rmevZSkZZqDmabVZDk5g'>
                <FontAwesomeIcon icon = {faYoutube}></FontAwesomeIcon>
                </a>
                <a href='https://twitter.com/amano_dema'>
                <FontAwesomeIcon icon = {faTwitter}></FontAwesomeIcon>
                </a>
                
            </div>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'M <span className='highlighted-text'>Dema</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1></h1>
                </span>
            </div>
        </div>
        </div>  
    </div>
  )
}
