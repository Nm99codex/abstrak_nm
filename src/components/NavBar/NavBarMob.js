import React from 'react'
import { BsCart3 } from "react-icons/bs"
import { useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { BsChevronDown } from 'react-icons/bs'
import {Link} from "react-router-dom"
function NavBarMob() {

    const [sidePanel, setSidePanel] = useState(false);
    function CheckSidePanel() {
        setSidePanel((prev) => !prev);
    }

    const [daclicked, setDaclicked] = useState(false);
    const [serviceClicked, setServiceClicked] = useState(false);
    const [portfolioClicked, setPortfolioClicked] = useState(false);
    const [pagesclicked, setPagesclicked] = useState(false);
    const [blogsclicked, setBlogsclicked] = useState(false);



    const navElements = [
        {
            link: "Digital Agency",
            dropdown: [
                {
                    text: ["Digital Agency", , ,],
                    src: "/"
                },
                {
                    text: ["Creative Agency"],
                    src: "/"
                },
                {
                    text: ["Personal Portfolio"],
                    src: "/"
                },
                {
                    text: ["Home Startup"],
                    src: "/"
                },
                {
                    text: ["Corporate Agency"],
                    src: "/"
                },
                {
                    text: ["Digital Agency - One Page"],
                    src: "/"
                },
                {
                    text: ["Creative Agency"],
                    src: "/"
                },


            ],
            ClickedFunction: function () {

                setDaclicked((prev) => !prev);
                return daclicked;
            },
            status: daclicked


        },

        {
            link: "Services",
            dropdown: [
                {
                    text: ["Service"],
                    src: "/services"
                },
                {
                    text: ["Service two"],
                    src: "/services-page"
                },
                {
                    text: ["Service details"],
                    src: "/video-production"
                }
            ],
            ClickedFunction: function () {

                setServiceClicked((prev) => !prev);
            },
            status: serviceClicked
        },

        {
            link: "Portfolio",
            dropdown: [
                {
                    text: ["Two Column"],
                    src: "/"
                },
                {
                    text: ["Three Column"],
                    src: "/"
                },
                {
                    text: ["Four Column"],
                    src: "/"
                },
                {
                    text: ["Two Column Width"],
                    src: "/"
                },
                {
                    text: ["PortFolio details"],
                    src: "/"
                },


            ],
            ClickedFunction: function () {

                setPortfolioClicked((prev) => !prev);
                return portfolioClicked;
            },
            status: portfolioClicked
        },

        {
            link: "Pages",
            dropdown: [
                {
                    text: ["About Us"],
                    src: "/aboutus"
                },
                {
                    text: ["Shop"],
                    src: "/"
                },
                {
                    text: ["Our Office"],
                    src: "/"
                },
                {
                    text: ["Case Study"],
                    src: "/"
                },
                {
                    text: ["Case Studt details"],
                    src: "/"
                },
                {
                    text: ["Team"],
                    src: "/"
                },
                {
                    text: ["Team Details"],
                    src: "/"
                },
                {
                    text: ["Our Clients"],
                    src: "/"
                },
                {
                    text: ["Testimonial"],
                    src: "/"
                },
                {
                    text: ["Pricing Table"],
                    src: "/"
                },
                {
                    text: ["Typography"],
                    src: "/"
                },

            ],
            ClickedFunction: function () {

                setPagesclicked((prev) => !prev);
                return pagesclicked;
            },
            status: pagesclicked
        },

        {
            link: "Blogs",
            dropdown: [
                {
                    text: ["Blogs"],
                    src: "/"
                },
                {
                    text: ["Standard Post"],
                    src: "/"
                },
                {
                    text: ["Gallery Post"],
                    src: "/"
                },
                {
                    text: ["Video Post"],
                    src: "/"
                },
                {
                    text: ["Quote Post"],
                    src: "/"
                },
                {
                    text: ["Audio Post"],
                    src: "/"
                }

            ],
            ClickedFunction: function () {

                setBlogsclicked((prev) => !prev);
                return blogsclicked;
            },
            status: blogsclicked
        },

    ];


    return (
        <>
            <div className='flex top-0 sticky bg-white z-[9999] py-[0.9375rem] px-[0.9375rem] items-center justify-between'>
                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/logo/logo-2.svg" className=' w-[8.9375rem] h-auto' />

                <div className=' flex items-center'>
                    <div className=' relative mr-[1.25rem]'>
                        <BsCart3 className=' w-[1.546875rem]  h-auto' />
                        <div className=' aw-cart-count'>
                            0
                        </div>
                    </div>
                    <div className=" mr-[1.25rem]" >
                        <button className='btn-wrap bg-[#525260] w-[2.8125rem] h-[2.8125rem] flex flex-col justify-between ' onClick={CheckSidePanel}>
                            <span className=' bg-white h-[2px] w-[1.25rem] mb-[0.25rem] rounded-[0.625rem] btn-wrap-span group-hover:btn-wrap-span'></span>
                            <span className=' bg-white h-[2px] w-[1.25rem] mb-[0.25rem] rounded-[0.625rem]'></span>
                            <span className='btn-wrap-span-2 bg-white w-[0.625rem] h-[2px] mb-[0.25rem] rounded-[0.625rem]  ml-[0.625rem]'></span>

                        </button>
                        {
                            sidePanel ?
                                (
                                    <>
                                        <div className='sidepanelMob bg-white'>
                                            <div className='mx-[0.625rem] flex justify-between items-center pb-[1.25rem] bg-white hover:transition-all hover:duration-800 hover:delay-1000'>

                                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/logo/logo-2.svg" className=' w-[51.94%] h-auto' />

                                                <button onClick={CheckSidePanel} className=" w-[1.875rem] h-[1.875rem] border-2 border-[#99a1aa] rounded-[0.625rem]">
                                                    <GrClose className=' w-[0.6018rem] font-[700] h-auto mx-auto' />
                                                </button>
                                            </div>


                                            <div className='mx-[0.625rem] font-[500] text-[0.9375em] text-[#525260]'>
                                                {navElements.map((navEle) => (
                                                    <>
                                                        <div className=' relative border-[#e5e7eb] border-t bg-white ' onClick={(navEle.ClickedFunction)}>
                                                            <div className=' flex justify-between items-center '>

                                                                <div class="mr-[0.3rem] hover:cursor-pointer  leading-[3.125rem] hover:text-[#5956E9] text-[#525260] " >
                                                                    {navEle.link}

                                                                </div>
                                                                <div className=''>
                                                                    <BsChevronDown className='w-4/5' />
                                                                </div>
                                                            </div>
                                                            {
                                                                navEle.status && (
                                                                    <div className='hover:transition-all hover:duration-300 flex flex-col align-top text-[#525260] bg-white'>
                                                                        {navEle.dropdown.map((prop) => (
                                                                            <Link to={prop.src}>
                                                                                <div className='px-[0.9375rem] py-[0.4375rem] hover:text-[#5956E9]'>
                                                                                    {prop.text}
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                ) 
                                                            }
                                                        </div> 
                                                    </>
                                                ))}
                                                <div className='flex items-center  border-[#e5e7eb] border-t border-b bg-white '>
                                                    <Link to="/contact">
                                                        <div class=" mr-[0.3rem] hover:cursor-pointer relative leading-[3.125rem] hover:text-[#5956E9] text-[#525260]">
                                                            Contact
                                                        </div>

                                                    </Link>
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
                    <button className='  rounded-full text-white bg-[#5956e9] w-[2.8125rem] h-[2.8125rem]'>
                        <i class="fas fa-moon" />
                    </button>

                </div>
            </div>
        </>
    )
}

export default NavBarMob

