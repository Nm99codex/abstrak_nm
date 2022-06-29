import React from 'react'

function OurTeam() {
    return (
        <>
            <div className=' px-[1.875rem] flex pt-[6.875rem] pb-[7.1875rem] items-center justify-center'>
                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/10/about-2.png " className=' w-[40rem] pr-[0.9375rem] h-auto' />
                <div className=' pl-[0.9375rem]'>

                    <div className="">
                        <div className=' font-[500] text-[1.25em] mb-[0.9375rem] text-[#C75C6F] '>
                            Our Team
                        </div>
                        <div className=" text-[3.125rem] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
                            Alone we can do so little; together we can do so much.
                        </div>
                        <div className=' text-[1em] mb-[1.875rem] text-[#525260]'>
                            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero.
                        </div>
                        <button className='button-common mb-[3.75rem]'>
                            About Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam