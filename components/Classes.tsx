"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import CustomButton from './CustomButton'


const classes = [
  {
    name: 'body bulding',
    img : '/assets/img/classes/bodybuilding.jpg',
    desc:'Challenge yourself. Build the body you dream of. Start your free workout plan today! '
  },
  {
    name: 'cardion',
    img : '/assets/img/classes/cardio.jpg',
    desc:'"Boost your cardiovascular health with cardio, your gateway to personalized fitness and wellness solutions! '
  },
  {
    name: 'fitness',
    img : '/assets/img/classes/fitness.jpg',
    desc:'Unlock your potential with our tailored fitness plans, designed to empower and energize you towards your health goals '
  },
  {
    name: 'crosfitt',
    img : '/assets/img/classes/crossfit.jpg',
    desc:'Transform your fitness journey with our online CrossFit programs - elevate your strength and endurance from the comfort of your home'
  },
]



const Classes = () => {
  return (
    <section className="" id="class">

      <motion.div
variants={fadeIn('up',0.6)}
initial='hidden'
whileInView={'show'}
viewport={{  once:false,amount:0.2}}

       className='grid grid-cols-1 lg:grid-cols-2'>
        {classes.map((item, index)=>{
          return (
            <div className='relative w-full h-[300px] lg:h-[485px] flex flex-col
            justify-center items-center
            '
            key={index}

            >
           <div className='bg-black/50 absolute w-full h-full top-0 z-10 '>

           </div>
           <Image src={item.img} fill className='object-cover' alt=''/>
            <motion.div
            variants={fadeIn('up',0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{  once:false,amount:0.2}}
            className='z-30 max-w-[380px] text-center flex flex-col
            items-center justify-center gap-4
            '>
              <h3 className='h3 text-white '> {item.name}</h3>
              <p className='text-white'>{item.desc}</p>
              <div>
                <CustomButton
                containerStyles='w-[164px] h-[46px]'
                text='Read more'
                />
              </div>

            </motion.div>
            </div>
            
          )
        })}
      </motion.div>
    </section>
  )
}

export default Classes