import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { BlogWrapper, BlogWrapper2 } from "../../styled/HomeWrapper"

function LatestStories() {
    return (
        <>
            <div className=' px-[1.875rem] content-center text-center py-[8.75rem]'>
                <div className=' font-[500] text-[1.25em] mb-[1.25rem] text-[#C75C6F] '>
                    What's Going On
                </div>
                <div className=" text-[3.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                    Latest stories
                </div>
                <div className=' font-poppins font-[1.125rem] w-1/2 mx-auto text-[#525260] mb-[3rem]'>
                    News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing
                </div>
                <div className='flex items-center justify-center'>
                    <BlogWrapper className="w-[40.3125rem]">
                        <div className=' w-[48.38%] h-[auto] rounded-[1.875rem] overflow-hidden'>
                            <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/10/blog-3-Copy-300x240.png" className=' rounded-[1.875rem] transform transition duration-300 hover:scale-110  object-cover hover:cursor-pointer' />
                        </div>
                        <div className=' ml-[1.25rem] w-[46.61%] h-auto text-left'>
                            <div className='flex mb-[1.25rem] text-[1.25rem] font-[500]  text-left leading-[1.4] line-clamp-2'>
                                How to Increase Your ROI Through scientific SEM?
                            </div>

                            <div className=' text-ellipsis line-clamp-3 overflow-hidden mb-[1.875rem] text-[1em]  tracking-tight text-[#999FAE]'>
                                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
                            </div>
                            <div className=' flex items-center gap-x-[1.25rem] hover:gap-x-[0.25rem] hover:text-[#0d6efd] hover:transition-all hover:duration-300'>
                                <a href="#" className=' font-[500] text-[#292930] hover:text-[#0d6efd] '>
                                    Learn more
                                </a>
                                <IoIosArrowForward className='hover:text-[blue] pt-[0.2rem]' />

                            </div>
                        </div>
                    </BlogWrapper>

                    <BlogWrapper2 className=' border-none  pl-[2.5rem] w-[40.3125rem] '>
                        <div className='inline w-[48.38%] h-[auto] rounded-[1.875rem] overflow-hidden'>
                            <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/blog-4-300x240.png" className='rounded-[1.875rem] overflow-hiddentransform transition duration-300 hover:scale-110  object-cover hover:cursor-pointer' />
                        </div>
                        <div className=' ml-[1.25rem] w-[46.61%] h-auto text-left'>
                            <div className='flex mb-[1.25rem] text-[1.25rem] font-[500]  text-left leading-[1.4] line-clamp-2'>
                                eCommerce Marketing Statistics You Should Know in 2021.
                            </div>

                            <div className=' text-ellipsis line-clamp-3 overflow-hidden mb-[1.875rem] text-[1em]  tracking-tight text-[#999FAE]'>
                                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
                            </div>
                            <div className=' flex items-center gap-x-[1.25rem] hover:gap-x-[0.25rem] hover:text-[#0d6efd] hover:transition-all hover:duration-300'>
                                <a href="#" className=' font-[500] text-[#292930] hover:text-[#0d6efd] '>
                                    Learn more
                                </a>
                                <IoIosArrowForward className='hover:text-[blue] pt-[0.2rem]' />

                            </div>

                        </div>
                    </BlogWrapper2>

                </div>
            </div>
        </>
    )
}

export default LatestStories