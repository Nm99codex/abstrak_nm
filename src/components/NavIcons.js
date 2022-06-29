import React from 'react'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'



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
                    text: ["Creative Agency"],
                    src: "#"
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
                    text: ["Creative Agency"],
                    src: "#"
                }
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
                    text: ["Creative Agency"],
                    src: "#"
                }
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
                    text: ["Creative Agency"],
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
            <div className='hidden lg:flex mx-[0.625rem] font-[500] text-[1em] text-[#525260]'>
                {navElements.map((navEle) => (
                    <>
                        <div className='flex items-center ' onMouseEnter={(navEle.ClickedFunction)} onMouseLeave={(navEle.ClickedFunction)}>
                            <div class="Navunderline-hover-effect mr-[0.3rem] hover:cursor-pointer relative hover:text-[#5956E9]" >
                                {navEle.link}
                                {
                                    navEle.status && (
                                        <div className="absolute top-8 w-[16.875rem] text-[#525260] bg-white shadow-xl">
                                            <div className=' flex flex-col align-top px-[0.625rem] py-[0.9375rem]'>
                                                {navEle.dropdown.map((prop) => (
                                                    <div className='px-[0.9375rem] py-[0.4375rem] nav-chidren-hover hover:text-[#5956E9]'>
                                                        {prop.text}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className=' pb-[0.3rem] mr-[1rem]'>
                                <BsChevronDown className='w-4/5' />
                            </div>
                        </div>
                    </>
                ))}
                <div className='flex items-center '>
                    <div class="Navunderline-hover-effect mr-[0.3rem] hover:cursor-pointer hover:text-[#5956E9] ">
                        Contact
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default NavIcons