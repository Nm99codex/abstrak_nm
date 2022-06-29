import React from 'react'
import { ourvaluesLine1, ourvaluesLine2 } from '../../../data/values'

function OurValues() {
    return (
        <>
            <div className='px-[1.875rem] pt-[8.4375rem] pb-[5rem] z-1 items-center justify-center bg-[#27272e]'>

                <div className=' font-[500] text-[1.25em] mb-[0.9375rem] text-[#C75C6F] '>
                    Our Values
                </div>
                <div className='w-[47.5%]'>
                    <div className='text-[3.5rem] text-[white] mb-[2.5rem]  font-medium leading-[1.25]'>
                        Why should you work with us?
                    </div>
                    <div className=' text-[1.125rem] mb-[2.9rem] text-[#99a1aa]'>
                        Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet
                    </div>
                </div>

                <div className=' flex justify-between gap-x-[1.875rem]'>
                    {ourvaluesLine1.map((prop) => (
                        <>
                            <div className=' group mb-[3.75rem]'>
                                <button className=' background-gradient text-[2.5rem] text-white font-medium rounded-full mb-[2.5rem] w-[5rem] transition_all h-[5rem] group-hover:bg-[#5956e9] group-hover:transition_all group-hover:duration-[0.3s]'>
                                    {prop.number}
                                </button>
                                <div className=' text-white text-[1.5em] mb-[1.875rem] '>
                                    {prop.title}

                                </div>
                                <div className=' opacity-50 text-[1em] text-[#99a1aa] group-hover:text-[white] group-hover:opacity-[100] group-hover:transition_all group-hover:duration-[0.3s]'>
                                    {prop.details}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className=' flex justify-between gap-x-[1.875rem]'>
                    {ourvaluesLine2.map((prop) => (
                        <>
                            <div className=' group mb-[3.75rem]'>
                                <button className=' background-gradient text-[2.5rem] text-white font-medium rounded-full mb-[2.5rem] w-[5rem] transition_all h-[5rem] group-hover:bg-[#5956e9] group-hover:transition_all group-hover:duration-[0.3s]'>
                                    {prop.number}
                                </button>
                                <div className=' text-white text-[1.5em] mb-[1.875rem] '>
                                    {prop.title}

                                </div>
                                <div className=' opacity-50 text-[1em] text-[#99a1aa] group-hover:text-[white] group-hover:opacity-[100] group-hover:transition_all group-hover:duration-[0.3s]'>
                                    {prop.details}
                                </div>
                            </div>
                        </>
                    ))}
                </div>


            </div>
        </>

    )
}

export default OurValues