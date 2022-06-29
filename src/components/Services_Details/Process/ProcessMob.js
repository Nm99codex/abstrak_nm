import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { process_logo_design } from '../../../data/process_logo_design'

function ProcessMob() {
    return (
        <>
            <div className=' px-[0.9375rem] content-center text-center pb-[1.25rem] pt-[3.75rem]  bg-[#ecf2f6] mx-0'>
                <div className=' font-[500] text-[1em] mb-[0.9375rem] text-[#C75C6F] '>
                    Process
                </div>
                <div className=" text-[2.125em] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                    Our logo design process
                </div>
                <div className=' font-poppins text-[1em] mx-auto text-[#525260] mb-[5.625rem]'>
                    Our comprehensive logo design strategy ensures a perfectly crafted logo for your business.
                </div>

                {/* Step elements */}
                <div className=''>
                    {process_logo_design.map((prop) => (
                        <>
                            <div className=' mx-auto'>
                                <div className=' bg-white w-[92%] rounded-[1.875rem]  h-[auto] text-center mb-[1.875rem] mx-auto'>
                                    <img src={prop.link} className='w-[full] h-[auto] ' />
                                </div>
                                <div className=' text-left '>
                                    <div className=' font-[500] text-[1em] mb-[0.625rem] text-[#C75C6F] '>
                                        {prop.step}
                                    </div>
                                    <div className=" text-[2em] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                                        {prop.title}
                                    </div>
                                    <div className=' font-poppins text-[1em] text-[#525260] mb-[3.125rem]'>
                                        {prop.details}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ProcessMob