import React from 'react'
import { ExpertsField } from "../../styled/ServicesSecondWrapper"


function ExpertsInFieldMob() {
    return (
        <>
            <div className=' pt-[3.75rem] pb-[1.875rem] '>

                <div className=' pl-[0.9375rem]'>

                    <div className=" ">
                        <div className=' font-[500] text-[1em] mb-[0.9375rem] text-[#C75C6F] '>
                            Experts in field
                        </div>
                        <div className=" text-[2.125rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500] leading-[1.2]">

                            What makes us special?

                        </div>
                        <div className=' text-[1em] mb-[2.5rem] text-[#525260]'>
                            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero.
                        </div>
                    </div>

                    <button className='button-common-mob mb-[1.875rem]'>
                        Careers
                    </button>
                </div>


                <div className=' flex flex-col gap-y-[1.875rem] items-center mx-[0.9375rem]'>
                    <ExpertsField className=' px-[1.25rem] pt-[1.875rem] pb-[3.75rem] rounded-[1.875rem] '>
                        <div>
                            <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-13.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                        </div>
                        <div className=' mb-[0.625rem] mx-auto'>
                            <div className=' text-[2.125rem] text-[#5957e9]'>15+</div>
                        </div>
                        <div className=' text-[#525260] text-[1.125rem] leading-[1.2] tracking-tight font-medium'>
                            Years of operation
                        </div>
                    </ExpertsField>

                    <ExpertsField className=' px-[1.25rem] pt-[1.875rem] pb-[3.75rem] rounded-[1.875rem] '>
                        <div>
                            <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-14.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                        </div>
                        <div className=' mb-[0.625rem] mx-auto'>
                            <div className=' text-[2.125rem] text-[#5957e9]'>50+</div>
                        </div>
                        <div className=' text-[#525260] text-[1.125rem] leading-[1.2] tracking-tight font-medium'>
                            Specialist
                        </div>
                    </ExpertsField>
                    <ExpertsField className=' px-[1.25rem] pt-[1.875rem] pb-[3.75rem] rounded-[1.875rem] '>
                        <div>
                            <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-12.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                        </div>
                        <div className=' mb-[0.625rem] mx-auto'>
                            <div className=' text-[2.125rem] text-[#5957e9]'>50+</div>
                        </div>
                        <div className=' text-[#525260] text-[1.125rem] leading-[1.2] tracking-tight font-medium'>
                            Projects deliverd
                        </div>
                    </ExpertsField>
                    <ExpertsField className=' px-[1.25rem] pt-[1.875rem] pb-[3.75rem] rounded-[1.875rem] '>
                        <div>
                            <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-11.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                        </div>
                        <div className=' mb-[0.625rem] mx-auto'>
                            <div className=' text-[2.125rem] text-[#5957e9]'>50+</div>
                        </div>
                        <div className=' text-[#525260] text-[1.125rem] leading-[1.2] tracking-tight font-medium'>
                            Years of operation
                        </div>
                    </ExpertsField>
                </div>
            </div>
        </>)
}
export default ExpertsInFieldMob