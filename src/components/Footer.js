import React from 'react'; 
import {useState} from 'react';
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Input} from '@mui/material';
import useViewport from '../viewport/useViewport';
import { FooterWrapper } from '../styled/FooterWrapper';
import emailimg from '../Assets2/emailicon.jpeg';
import validator from 'validator';

export const Footer = () => {
  const {isTablet,isMobile}= useViewport()
  const [mail, setMail]= useState();
  const [emailError, setEmailError] = useState('')

  const settingmail=(e)=>{ 
    setMail(e.target.value);
  }

  const validateEmail = () => {

    if (validator.isEmail(mail)) {
      setEmailError('Thank you, your sign-up request was successful! Please check your email inbox to confirm.')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  return (
    // <div className='footer'>
    <FooterWrapper isTablet={isTablet} isMobile={isMobile}>
      <div className='contentfooter'>
        <div className='iconbar'>
          <a href='https://www.facebook.com/' rel="noreferrer" target='_blank'><i class="fa-brands fa-facebook-f fa-2x"></i></a>
          <a href='https://twitter.com/' rel="noreferrer" target='_blank'><i class="fa-brands fa-twitter fa-2x"></i></a>
          <a href='https://www.pinterest.com/' rel="noreferrer" target='_blank'><i class="fa-brands fa-pinterest-p fa-2x"></i></a>
          <a href='https://www.linkedin.com/' rel="noreferrer" target='_blank'><i class="fa-brands fa-linkedin-in fa-2x"></i></a>
          <a href='https://www.instagram.com/' rel="noreferrer" target='_blank'><i class="fa-brands fa-instagram fa-2x"></i></a>
          <a href='https://vimeo.com/' rel="noreferrer" target='_blank'><i class="fa-brands fa-vimeo-v fa-2x"></i></a>
        </div>
        
        <div class="footerdivs"> 
          <div className='getintouch'>
            <h2 className='heading'>Get in touch!</h2>
            <p className='textpara'>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p> 
            <div className='emailinput'>
            <div  className='inputbox' >
               <img className='img_mail' src={emailimg} alt='email'/>
              <Input type='email' margin='dense' disableUnderline placeholder='Your email address' onChange={(e) => settingmail(e)}
            required style={{width:'100%'}}/></div>
            <button className='subscribebtn' onClick={validateEmail}>Subscribe</button>
          </div>
          <span style={{
              fontSize:'0.8em',
              fontWeight: '200',
              color:'#525260'
          }}>{emailError}</span>
          </div>
          <div className='otherlinks'>
            <div className='servicesdiv'>
              <div className='headingService'>Services</div>
                <div className='serviceLinks'>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Online Marketing</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Technology</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Business</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Content Strategy</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Development</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Advertising Strategy</a></div>
                </div>
            </div>

            <div className='resourcesdiv'>
            <div className='headingResources'>Resources</div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>About Us</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Blog</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Shops</a></div>
            </div>

            <div className='supportdiv'>
                <div className='headingSupport'>Support</div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Contact</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Privacy Policy</a></div>
                <div style={{paddingBottom:'1rem'}}><a href='/'>Terms of use</a></div>
            </div> 
          </div>
        </div>
      </div>
        <hr/>
        <div className='footerbottom'>
          <div className='copyright'><AiOutlineCopyrightCircle/> <div className='reservecopyrights'> 2022. All rights are reserved by <a href='/'>Axilthemes</a>.</div></div>
          <ul>
            <li><a href='/'> Privacy Policy</a></li>
            <li><a href='/'>Terms of use</a></li>
          </ul>
        </div>
        </FooterWrapper>
  )
}
