import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import {BlogWrapperMob} from "../../styled/HomeWrapper"


function LatestStoriesMob() {
    return (
        <>
            <div className='px-[0.9375rem] content-center text-center py-[3.75rem]'>
                <div className=' font-[500] text-[1em] mb-[0.9375rem] text-[#C75C6F] '>
                    What's Going On
                </div>
                <div className=" text-[2.125em] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                    Latest stories
                </div>
                <div className=' font-poppins text-[1em] mx-auto text-[#525260] mb-[2.5rem]'>
                    News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing
                </div>
                <div className=' flex'>
                    <div>
                        <BlogWrapperMob className=' w-full'>
                            <div className=' w-[43.47%] h-[auto] rounded-[1.875rem] overflow-hidden '>
                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/10/blog-3-Copy-300x240.png" className='image_blog_hover rounded-[1.875rem] w-full  h-full overflow-hidden transform transition duration-300 hover:scale-110  object-cover hover:cursor-pointer' />
                            </div>
                            <div className=' ml-[1.25rem] w-[53.62%] h-auto text-left'>
                                <div className='flex mb-[0.9325rem] text-[1.25em] font-[500] overflow-x-hidden overflow-y-hidden line-clamp-2'>
                                    How to Increase Your ROI Through scientific SEM?
                                </div>

                                <div className='mb-[0.9325rem] text-[1em]  tracking-tight text-[#999FAE] line-clamp-3'>
                                    Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
                                </div>
                                <div className=' flex items-center gap-x-[0.9375rem] hover:gap-x-[0.25rem] hover:text-[#0d6efd] hover:transition-all hover:duration-300'>
                                    <a href="#" className=' font-[500] text-[#292930] hover:text-[#0d6efd] '>
                                        Learn more
                                    </a>
                                    <IoIosArrowForward className='hover:text-[blue] pt-[0.2rem]' />

                                </div>

                            </div>
                        </BlogWrapperMob>

                        <BlogWrapperMob className=' w-full'>
                            <div className=' w-[43.47%] h-[auto] rounded-[1.875rem] overflow-hidden '>
                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/blog-4-300x240.png" className='image_blog_hover rounded-[1.875rem] w-full  h-full overflow-hidden transform transition duration-300 hover:scale-110  object-cover hover:cursor-pointer' />
                            </div>
                            <div className=' ml-[1.25rem] w-[53.62%] h-auto text-left'>
                                <div className='flex mb-[0.9325rem] text-[1.25em] font-[500] overflow-x-hidden overflow-y-hidden line-clamp-2'>
                                eCommerce Marketing Statistics You Should Know in 2021.                                  </div>

                                <div className='mb-[0.9325rem] text-[1em]  tracking-tight text-[#999FAE] line-clamp-3'>
                                    Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
                                </div>
                                <div className=' flex items-center gap-x-[0.9375rem] hover:gap-x-[0.25rem] hover:text-[#0d6efd] hover:transition-all hover:duration-300'>
                                    <a href="#" className=' font-[500] text-[#292930] hover:text-[#0d6efd] '>
                                        Learn more
                                    </a>
                                    <IoIosArrowForward className='hover:text-[blue] pt-[0.2rem]' />

                                </div>

                            </div>
                        </BlogWrapperMob>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestStoriesMob