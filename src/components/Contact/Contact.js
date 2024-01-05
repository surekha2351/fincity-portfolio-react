import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@mui/material'
import { LinkedIn,GitHub,Facebook,Mail } from '@mui/icons-material'

import './Contact.css'

const  Contact=()=> {
  return (
    <Element id="contact" className='contact_container'>
            <h1>Contact</h1>                    

            <div className='contactIcons'>
                <a href="/">
                    <IconButton>
                        <LinkedIn className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="/">
                    <IconButton>
                        <Facebook className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="/">
                    <IconButton>
                        <GitHub className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="/">
                    <IconButton>
                        <Mail className='iconSize' />                        
                    </IconButton>
                </a>
            </div>
            <p className='copyright'>Copyright   
                        
                                     2024. All rights served
            </p>
        
    
    </Element>
   
  )
}

export default Contact