import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

function Process() {
    return (
        <>
            <div className=' px-[1.875rem] content-center text-center pt-[8.75rem] pb-[3.75rem]  bg-[#ecf2f6]'>
                <div className=' font-[500] text-[1.25em] mb-[1.25rem] text-[#C75C6F] '>
                    Process
                </div>
                <div className=" text-[3.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                    Our logo design process
                </div>
                <div className=' font-poppins text-[1.125em] w-1/2 mx-auto text-[#525260] mb-[5.625rem]'>
                    Our comprehensive logo design strategy ensures a perfectly crafted logo for your business.
                </div>

                {/* Step elements */}
                {/* NOTE:STEP 1 */}
                <div className=' flex gap-x-[3.75rem] text-center mb-[3.75rem] items-center'>
                    <div className=' bg-white rounded-[1.875rem] w-[25.625rem] h-[auto]  text-center'>
                        <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/process-1.png" className='w-[25.625rem] h-[auto] ' />
                    </div>
                    <div className=' text-left w-[61.1%]'>
                        <div className=' font-[500] text-[1.25em] mb-[1.25rem] text-[#C75C6F] '>
                            Step One
                        </div>
                        <div className=" text-[2.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                            Discover
                        </div>
                        <div className=' font-poppins text-[1em] w-[64.4%]  text-[#525260] mb-[2.5rem]'>
                            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
                        </div>
                    </div>
                </div>

                {/* NOTE:STEP 2 */}

                <div className=' flex justify-end gap-x-[1.875rem] text-center mb-[3.75rem] items-center'>
                    <div className=' text-left w-[37.15%]'>
                        <div className=' font-[500] text-[1.25em] mb-[1.25rem] text-[#C75C6F] '>
                        Step Two                        </div>
                        <div className=" text-[2.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                        Prototype
                        </div>
                        <div className=' font-poppins text-[1em] text-[#525260] mb-[2.5rem]'>
                            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
                        </div>
                    </div>
                    <div className=' bg-white rounded-[1.875rem] w-[25.625rem] h-[auto]  text-center'>
                        <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/process-2.png" className='w-[25.625rem] h-[auto] ' />
                    </div>
                </div>

                {/* NOTE:STEP 3 */}
                <div className=' flex gap-x-[3.75rem] text-center mb-[3.75rem] items-center'>
                    <div className=' bg-white rounded-[1.875rem] w-[25.625rem] h-[auto]  text-center'>
                        <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/process-3.png" className='w-[25.625rem] h-[auto] ' />
                    </div>
                    <div className=' text-left w-[61.1%]'>
                        <div className=' font-[500] text-[1.25em] mb-[1.25rem] text-[#C75C6F] '>
                            Step Three
                        </div>
                        <div className=" text-[2.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                        Development
                        </div>
                        <div className=' font-poppins text-[1em] w-[64.4%]  text-[#525260] mb-[2.5rem]'>
                            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
                        </div>
                    </div>
                </div>

                {/* NOTE:STEP 4 */}
                <div className=' flex justify-end gap-x-[1.875rem] text-center mb-[3.75rem] items-center'>
                    <div className=' text-left w-[37.15%]'>
                        <div className=' font-[500] text-[1.25em] mb-[1.25rem] text-[#C75C6F] '>
                        Step four                        </div>
                        <div className=" text-[2.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                        Build
                        </div>
                        <div className=' font-poppins text-[1em] text-[#525260] mb-[2.5rem]'>
                            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
                        </div>
                    </div>
                    <div className=' bg-white rounded-[1.875rem] w-[25.625rem] h-[auto]  text-center'>
                        <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/process-4.png" className='w-[25.625rem] h-[auto] ' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Process