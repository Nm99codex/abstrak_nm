import React from 'react'
import { ourvaluesLine1, ourvaluesLine2 } from '../../../data/values'

function OurValuesMob() {
    return (
        <>
            <div className='px-[0.9375rem] pt-[3.75rem] items-center justify-center bg-[#27272e]'>

            <div className=' font-[500] text-[1em] mb-[0.9375rem] text-[#C75C6F] '>
                    Our Values
                </div>
                <div className=''>
                    <div className='text-[2.125em] text-[white] mb-[2.1875rem]  font-medium leading-[1.25]'>
                        Why should you work with us?
                    </div>
                    <div className=' text-[1em] mb-[2.9rem] text-[#99a1aa]'>
                        Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet
                    </div>
                </div>


                <div className=''>
                    {ourvaluesLine1.map((prop) => (
                        <>
                            <div className=' group '>
                                <button className=' background-gradient text-[2em] text-white font-medium rounded-full mb-[2.5rem] w-[5rem] transition_all h-[5rem] group-hover:bg-[#5956e9] group-hover:transition_all group-hover:duration-[0.3s]'>
                                    {prop.number}
                                </button>
                                <div className=' text-white text-[1.25em] mb-[1.875rem] '>
                                    {prop.title}

                                </div>
                                <div className=' opacity-50 text-[1em] text-[#99a1aa] group-hover:text-[white] group-hover:opacity-[100] group-hover:transition_all group-hover:duration-[0.3s]  pb-[3.75rem]'>
                                    {prop.details}
                                </div>
                            </div>
                        </>
                    ))}
                    {ourvaluesLine2.map((prop) => (
                        <>
                            <div className=' group '>
                                <button className=' background-gradient text-[2em] text-white font-medium rounded-full mb-[2.5rem] w-[5rem] transition_all h-[5rem] group-hover:bg-[#5956e9] group-hover:transition_all group-hover:duration-[0.3s]'>
                                    {prop.number}
                                </button>
                                <div className=' text-white text-[1.25em] mb-[1.875rem] '>
                                    {prop.title}

                                </div>
                                <div className=' opacity-50 text-[1em] text-[#99a1aa] group-hover:text-[white] group-hover:opacity-[100] group-hover:transition_all group-hover:duration-[0.3s]  pb-[3.75rem]'>
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

export default OurValuesMob