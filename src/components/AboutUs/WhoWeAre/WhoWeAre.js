import React from 'react'
import Button from '@mui/material/Button';


function WhoWeAre() {
  return (
    <>
      <div className='px-[0.9375rem] flex pt-[8.4375rem] pb-[5rem] items-center justify-center'>
        <img src="https://new.axilthemes.com/themes/abstrak/wp-content/uploads/2021/09/case-study-4.png " className=' w-[40rem] h-auto' />
        <div className=' pl-[0.9375rem] '>

          <div className="">
            <div className=' font-[500] text-[1.25em] mb-[0.9375rem] text-[#C75C6F] '>
              Who we are
            </div>
            <div className=" text-[3.5em] tracking-tight text-[#292930] mb-[1.875rem] font-[500]">
              Building software for world changers
            </div>
            <div className=' min-w-full text-[1em] mb-[1.875rem] text-[#525260]'>
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis.
              <br />
              <br />

              Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.
            </div>
          </div>

          <button className='button-common mb-[3.75rem]'>
                        About Us
                    </button>

          <div className=' flex items-center'>

            <div className=' pr-[3.75rem] mr-[3.75rem] border-r border-[#c7c7d5]'>
              <div className=' text-[3.5em] text-[#C75C6F]'>15+</div>
              <div className=' text-[#525260] text-[1em] font-medium'>
                Years on the market
              </div>
            </div>

            <div className=' '>
              <div className=' text-[3.5em] text-[#C75C6F]'>366+</div>
              <div className=' text-[#525260] text-[1em] font-medium'>
              Projects delivered so far
              </div>
            </div>

          </div>



        </div>
      </div>
    </>
  )
}

export default WhoWeAre