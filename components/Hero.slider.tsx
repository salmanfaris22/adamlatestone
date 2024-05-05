'use client'

import { Swiper , SwiperSlide } from 'swiper/react'

import  "swiper/css"
import "swiper/css/navigation"
import CustomButton from './CustomButton'
import SwiperNav from './SwiperNav'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'

const HeroSlider = () => {
    return (
       <Swiper className='h-full '>
        <SwiperSlide >
    
<div className='h-full flex justify-end pt-36 '>
  
<div className='flex  absolute flex-col items-center lg:items-start lg:max-w-[700px]'>
      <motion.h1
      variants={fadeIn('up',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
      className='h1  text-center  lg:text-left mb-2'>
          <span className='text-red-700'>Where hard </span> work meets success
      </motion.h1>
      <motion.p
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
      className='text-white italic text-center lg:text-left mb-4'>Success awaits at the intersection of hard work and determination

      </motion.p>
      <motion.div  
        variants={fadeIn('up',0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{  once:false,amount:0.2}}
      >
      <CustomButton text='Get started' containerStyles='w-[196px] h-[62px]'/>
      </motion.div>
  </div> 
</div>
</SwiperSlide>

<SwiperSlide >
   
<div className='h-full flex justify-end pt-36 '>
  
<div className='flex  absolute flex-col items-center lg:items-start lg:max-w-[700px]'>
      <motion.h1
      variants={fadeIn('up',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
      className='h1  text-center lg:text-left mb-2'>
          <span>decide <br />
          cummit</span> succeed
      </motion.h1>
      <motion.p
      variants={fadeIn('up',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
      className='text-white italic text-center lg:text-left mb-4'>
      Commitment paves the path to success on the journey of personal growth.

      </motion.p>
      <motion.div  
        variants={fadeIn('up',0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{  once:false,amount:0.2}}
      >
      <CustomButton text='Get started' containerStyles='w-[196px] h-[62px]'/>
      </motion.div>
  </div> 
</div>
</SwiperSlide>








{/* wpiper nav ntn */}
<div className=''>
<SwiperNav containerStyles='absolute bottom-2 gap-2 lg:bottom-0 right-0
 h-[130px] w-full lg:w-[700px] z-50 flex justify-center 
lg:justify-start gap-1
'
 
btnStyles='border border-red-700 text-white w-[56px] h-[56px] flex justify-center
 items-center hover:bg-red-700 transition-all duration-300
 ' 
iconStyles='text-2xl' />
</div>
       </Swiper>
    )
}

export default HeroSlider
