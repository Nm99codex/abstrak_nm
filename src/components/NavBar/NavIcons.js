import React from 'react'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import {Link} from "react-router-dom"



function NavIcons() {
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
                    src: "#"
                },
                {
                    text: ["Creative Agency"],
                    src: "#"
                },
                {
                    text: ["Personal Portfolio"],
                    src: "#"
                },
                {
                    text: ["Home Startup"],
                    src: "#"
                },
                {
                    text: ["Corporate Agency"],
                    src: "#"
                },
                {
                    text: ["Digital Agency - One Page"],
                    src: "#"
                },
                {
                    text: ["Creative Agency"],
                    src: "#"
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
                    src: "#"
                },
                {
                    text: ["Three Column"],
                    src: "#"
                },
                {
                    text: ["Four Column"],
                    src: "#"
                },
                {
                    text: ["Two Column Width"],
                    src: "#"
                },
                {
                    text: ["PortFolio details"],
                    src: "#"
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
                    src: "#"
                },
                {
                    text: ["Our Office"],
                    src: "#"
                },
                {
                    text: ["Case Study"],
                    src: "#"
                },
                {
                    text: ["Case Studt details"],
                    src: "#"
                },
                {
                    text: ["Team"],
                    src: "#"
                },
                {
                    text: ["Team Details"],
                    src: "#"
                },
                {
                    text: ["Our Clients"],
                    src: "#"
                },
                {
                    text: ["Testimonial"],
                    src: "#"
                },
                {
                    text: ["Pricing Table"],
                    src: "#"
                },
                {
                    text: ["Typography"],
                    src: "#"
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
                    src: "#"
                },
                {
                    text: ["Standard Post"],
                    src: "#"
                },
                {
                    text: ["Gallery Post"],
                    src: "#"
                },
                {
                    text: ["Video Post"],
                    src: "#"
                },
                {
                    text: ["Quote Post"],
                    src: "#"
                },
                {
                    text: ["Audio Post"],
                    src: "#"
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
            <div className='hidden lgS:flex mx-[0.625rem] font-[500] text-[1em] text-[#525260] '>
                {navElements.map((navEle) => (
                    <>
                        <div className='flex items-center ' onMouseEnter={(navEle.ClickedFunction)} onMouseLeave={(navEle.ClickedFunction)}>
                            <div class="Navunderline-hover-effect mr-[0.3rem] hover:cursor-pointer relative h-[2rem] hover:text-[#5956E9]" >
                                {navEle.link}
                                {
                                    navEle.status && (
                                        <div className="absolute top-8 w-[16.875rem] text-[#525260] bg-white shadow-xl">
                                            <div className=' flex flex-col align-top px-[0.625rem] py-[0.9375rem]'>
                                                {navEle.dropdown.map((prop) => (
                                                    <Link to={prop.src}>
                                                        <div className='px-[0.9375rem] py-[0.4375rem] nav-chidren-hover hover:text-[#5956E9]'>
                                                            {prop.text}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className=' pb-[0.4rem] mr-[1rem]'>
                                <BsChevronDown className='w-4/5' />
                            </div>
                        </div>
                    </>
                ))}
                <div className='flex items-center '>
                    <Link to="/contact">
                        <div class="Navunderline-hover-effect mr-[0.3rem] hover:cursor-pointer hover:text-[#5956E9] ">
                            Contact
                        </div>
                    </Link>
                </div>


            </div>
        </>
    )
}

export default NavIcons