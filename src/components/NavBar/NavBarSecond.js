import React from 'react'
import NavIcons from './NavIcons'
import { BsCart3 } from "react-icons/bs"
import { useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { AiOutlineSearch, AiFillHome } from "react-icons/ai"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {Link} from "react-router-dom"



function NavBarSecond() {
    const [sidePanel, setSidePanel] = useState(false);
    function CheckSidePanel() {
        setSidePanel((prev) => !prev);
    }

    return (
        <>
            <div className='flex bg-white shadow-sm py-[0.9375rem]  px-[1.875rem] items-center justify-between'>
                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/logo/logo.svg" />

                <NavIcons />

                <div className=' flex items-center'>
                    <div className=' relative mr-[1.875rem]'>
                        <BsCart3 className=' w-[1.546875rem]  h-auto' />
                        <div className=' aw-cart-count'>
                            0
                        </div>
                    </div>
                    <div className="" >
                        <button className='btn-wrap bg-[#ecf2f6] w-[3.75rem] h-[3.75rem] flex flex-col justify-between' onClick={CheckSidePanel}>
                            <span className=' bg-[#525260] h-[2px] w-[1.25rem] mb-[0.25rem] rounded-[0.625rem] btn-wrap-span'></span>
                            <span className=' bg-[#525260] h-[2px] w-[1.25rem] mb-[0.25rem] rounded-[0.625rem]'></span>
                            <span className='btn-wrap-span-2 bg-[#525260] w-[0.625rem] h-[2px] mb-[0.25rem] rounded-[0.625rem]  ml-[0.625rem]'></span>

                        </button>
                        {
                            sidePanel ?
                                (
                                    <>
                                        <div className='sidepanel bg-white z-[99999]'>
                                            <div className='text-left text-[#808080] p-[3.125rem] bg-white'>
                                                <button onClick={CheckSidePanel}>
                                                    <GrClose className=' w-[1.375rem] h-auto ' />
                                                </button>
                                            </div>

                                            <div className=' p-[3.125rem] pb-[1rem] bg-white'>
                                                <div className=' flex justify-between items-center text-[2.5em] border-b-[2px] text-[#292930] border-[#999ab8]'>
                                                    <form>
                                                        <input value='Search ...' />
                                                    </form>
                                                    <div className='text-[#808080]'>
                                                        <AiOutlineSearch className=' w-[1.5rem] h-auto ' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className=' flex items-center bg-white p-[3.125rem] font-poppins pt-0'>
                                                <div className=' text-left mt-[1.875rem] pr-[0.9375rem] w-1/2'>
                                                    <div className=' mb-[1.875rem] text-[#27272e] text-[2.25em] font-medium hover:text-[#5956E9]'>
                                                        Digital Agency
                                                    </div>
                                                    <div className=' mb-[1.875rem] text-[#27272e] text-[2.25em] font-medium hover:text-[#5956E9]'>Creative Agency</div>

                                                    <div className=' mb-[1.875rem] text-[#27272e] text-[2.25em] font-medium hover:text-[#5956E9]'>Personal PortFolio</div>
                                                    <div className=' mb-[1.875rem] text-[#27272e] text-[2.25em] font-medium hover:text-[#5956E9]'>Home Startup</div>
                                                    <div className=' mb-[1.875rem] text-[#27272e] text-[2.25em] font-medium hover:text-[#5956E9]'>Corporate Agency</div>
                                                </div>

                                                <div className=' text-left mt-[1.875rem] pl-[0.9375rem] w-1/2'>
                                                    <div className=' mb-[0.9375rem] text-[#27272e] font-medium text-[1.125em]'>Contact Information</div>
                                                    <div className=' text-base leading-[1.5] text-[#525260] mb-[2.5rem]'>Theodore Lowe, Ap #867-859 Sit Rd, Azusa New York</div>

                                                    <div className=' mb-[0.9375rem] text-[#27272e] font-medium text-[1.125em]'> We are available 24/ 7. Call Now. </div>
                                                    <div className=' text-base leading-[1.5] text-[#525260] mb-[2.5rem]'>
                                                        <div className=' flex gap-x-[1.25rem] items-center mb-[0.625rem]'>
                                                            <FaPhone className=' w-[1rem] h-auto' />
                                                            <div>
                                                                (888) 456-2790
                                                            </div>
                                                        </div>

                                                        <div className=' flex gap-x-[1.25rem] items-center mb-[0.625rem]'><i class="fas fa-fax"></i>

                                                            <div>
                                                                (121) 255-53333
                                                            </div>
                                                        </div>

                                                        <div className=' flex gap-x-[1.25rem] items-center mb-[0.625rem]'>
                                                            <MdEmail className=' w-[1rem] h-auto' />
                                                            <div>
                                                                example@domain.com
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style={{ fontFamily: "DM Sans" }} className="mb-[0.9375rem] text-[1.125rem]">
                                                        Follow us
                                                    </div>
                                                    <div className=' flex flex-wrap '>
                                                        <button className=' w-[3.125rem] h-[3.125rem] text-white m-[0.375rem] rounded-full bg-[#3b5998]'>
                                                            <i class="fab fa-facebook-f" />
                                                        </button>
                                                        <button className=' w-[3.125rem] h-[3.125rem] text-white m-[0.375rem] rounded-full bg-[#1da1f2]'>
                                                            <i class="fab fa-twitter"></i>
                                                        </button>
                                                        <button className=' w-[3.125rem] h-[3.125rem] text-white m-[0.375rem] rounded-full bg-[#bd081c]'>
                                                            <i class="fab fa-pinterest-p"></i>
                                                        </button>
                                                        <button className=' w-[3.125rem] h-[3.125rem] text-white m-[0.375rem] rounded-full bg-[#0a66c2]'>
                                                            <i class="fab fa-linkedin-in"></i>
                                                        </button>
                                                        <button className=' w-[3.125rem] h-[3.125rem] text-white m-[0.375rem] rounded-full bg-[#c32aa3]'>
                                                            <i class="fab fa-instagram"></i>
                                                        </button>
                                                        <button className=' w-[3.125rem] h-[3.125rem] text-white m-[0.375rem] rounded-full bg-[#1ab7ea]'>
                                                            <i class="fab fa-vimeo-v"></i>
                                                        </button>
                                                        {/* <img src={prop} className="w-[3.125rem] h-[3,125rem] m-[0.375rem] rounded-full" /> */}

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                :
                                (
                                    <>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBarSecond
