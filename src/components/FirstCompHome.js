import { Button } from '@mui/material';
import React from 'react';
// import '../CSS/FirstCompHome.css';
import {FirstCompHomeWrapper} from '../styled/FirstCompHomeWrapper';

export const FirstCompHome = () => {
  return (
    <FirstCompHomeWrapper>
      <div className='maindiv '>
          <div className='type text-[4em] mob:text-[2.125rem]'> 
              Technology & design studio
          </div>
          <Button className='viewbtn'>View Showcase</Button>
      </div> 
    </FirstCompHomeWrapper>
  )
}
 