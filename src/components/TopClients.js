import React from 'react'
import { TopClientsWrapper } from '../styled/TopClientsWrapper';
import {Typography} from '@mui/material';
import foxds from '../Assets2/foxds.png';
import velocity from '../Assets2/velocity.png';
import oliver from '../Assets2/oliver.png';
import rotashow from '../Assets2/rotashow.png';
import travelers from '../Assets2/travelers.png';
import duotrip from '../Assets2/duotrip.png';
import goldlines from '../Assets2/goldlines.png';
import waves from '../Assets2/waves.png';
import useViewport from '../viewport/useViewport'

export const TopClients = () => { 
    const {isTablet, isMobile}= useViewport();
    return (
        <TopClientsWrapper isTablet={isTablet} isMobile={isMobile}>
            <div className='content'>
                {/* <div className='heading_desc'> */}
                    <div className='secondheadingdiv'>
                        <div className='topclientsheading'>
                            Top Clients
                        </div>
                        <Typography variant='h3' className='headingsolutions'>We've built solutions<br isTablet={isTablet}/>for...</Typography>
                        <div className='description'>Design anything from simple icons to fully featured <br/>websites and applications</div>
                    </div>
                <div>
                    <div className='brands'> 
                        <div className='brandsrow1'>
                            <div className='brandsgrpof2'>
                                <div className='brandfoxds'>
                                    <img src={foxds} alt='foxds'/>
                                </div>
                                <div className='brandvelocity'>
                                    <img src={velocity} alt='velocity'/>
                                </div>
                            </div>
                            <div className='brandsgrpof2'>
                                <div className='brandtravelers'>
                                    <img src={travelers} alt='travelers'/>
                                </div>

                                <div className='brandrotashow'>
                                    <img src={rotashow} alt='rotashow'/>
                                </div>
                            </div>
                        </div>

                        <div className='brandsrow2'>
                            <div className='brandsgrpof2'>
                                <div className='brandduotrip'>
                                    <img title='grayscale' src={duotrip} alt='duotrip'/>
                                </div>
                                <div className='brandoliver'>
                                    <img src={oliver} alt='oliver'/>
                                </div>
                            </div>
                            <div className='brandsgrpof2'>
                                <div className='brandgoldlines'>
                                    <img src={goldlines} alt='goldlines'/>
                                </div>
                                <div className='brandwaves'>
                                    <img src={waves} alt='waves'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            {/* </div> */}
        </TopClientsWrapper>
    )
}
