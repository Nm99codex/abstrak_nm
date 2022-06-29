import React from 'react'
import { ExpertsField } from "../../styled/ServicesSecondWrapper"

function ExpertsInField() {
    return (
        <>
            <div className=' px-[1.875rem] flex gap-x-[1.875rem] pt-[8.75rem] pb-[6.875rem] items-center mx-0 justify-center '>
                <div className=''>
                    <div className=" text-left">
                        <div className=' font-[500] text-[1.25em] mb-[0.9375rem] text-[#C75C6F] '>
                            Experts in field
                        </div>
                        <div className=" text-[3.5rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">

                            What makes us special?
                        </div>
                        <div className=' text-[1em] mb-[2.5rem] text-[#525260]'>
                            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.
                        </div>
                    </div>
                    <button className='button-common mb-[3.75rem]'>
                        Careers
                    </button>
                </div>

                <div className=' flex gap-x-[1.875rem] '>
                    <div>
                        <ExpertsField className=' px-[3.625rem] pt-[3.75rem] pb-[1.875rem] rounded-[1.875rem] mb-[1.875rem]'>
                            <div className=' block'>
                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-13.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                            </div>
                            <div className=' mb-[0.625rem] mx-auto'>
                                <div className=' text-[3.5rem] text-[#5957e9]'>15+</div>
                            </div>
                            <div className=' text-[#525260] text-[1.25rem] leading-[1.2] tracking-tight font-medium mb-[1.25rem]'>
                                Years of operation
                            </div>
                        </ExpertsField>

                        <ExpertsField className=' px-[3.625rem] pt-[3.75rem] pb-[1.875rem] rounded-[1.875rem] mb-[1.875rem]'>
                            <div className=' block'>
                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-14.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                            </div>
                            <div className=' mb-[0.625rem] mx-auto'>
                                <div className=' text-[3.5rem] text-[#5957e9]'>50+</div>
                            </div>
                            <div className=' text-[#525260] text-[1.25rem] leading-[1.2] tracking-tight font-medium mb-[1.25rem]'>
                                Specialist
                            </div>
                        </ExpertsField>
                    </div>

                    <div className=' mt-[6.25rem]'>
                        <ExpertsField className=' px-[3.625rem] pt-[3.75rem] pb-[1.875rem] rounded-[1.875rem] mb-[1.875rem]'>
                            <div className=' block'>
                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-12.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                            </div>
                            <div className=' mb-[0.625rem] mx-auto'>
                                <div className=' text-[3.5rem] text-[#5957e9]'>50+</div>
                            </div>
                            <div className=' text-[#525260] text-[1.25rem] leading-[1.2] tracking-tight font-medium mb-[1.25rem]'>
                                Projects delivered                            </div>
                        </ExpertsField>

                        <ExpertsField className=' px-[3.625rem] pt-[3.75rem] pb-[1.875rem] rounded-[1.875rem] mb-[1.875rem]'>
                            <div className=' block'>
                                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/11/icon-1-11.png" className=' w-[2rem] h-[auto] mb-[1.25rem] mx-auto' />
                            </div>
                            <div className=' mb-[0.625rem] mx-auto'>
                                <div className=' text-[3.5rem] text-[#5957e9]'>50+</div>
                            </div>
                            <div className=' text-[#525260] text-[1.25rem] leading-[1.2] tracking-tight font-medium mb-[1.25rem]'>
                                Years of operation
                            </div>
                        </ExpertsField>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertsInField