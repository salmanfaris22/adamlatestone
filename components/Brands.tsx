"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import Image from 'next/image'
const Brands = () => {
  return (
    <section className="" id="contact">
{/* component */}
<div className="h-[300px] p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
      <motion.h2 
       variants={fadeIn('up',0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{  once:false,amount:0.2}}
      className="text-3xl font-semibold text-center mb-6 text-gray-700">Contact Us</motion.h2>
      <motion.div
       variants={fadeIn('up',0.6)}
       initial='hidden'
       whileInView={'show'}
       viewport={{  once:false,amount:0.2}}
      
      className="flex flex-wrap justify-center gap-2">
        <button className=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
       <a href="https://www.instagram.com/adamsalimfitnesstrainer/"><Image className="w-16 h-16 fill-current" src="/assets/insta.jpg" alt="" width={100} height={100} />
</a>
        </button>
        <button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" >
       <a href="https://wa.link/3jc06g"> <Image className="w-16 h-16 fill-current" src="/assets/wat.jpg" alt="" width={100} height={100}  />
</a>
        </button>
       
      </motion.div>
    </div>
  </div>
</div>


    </section>
  )
}

export default Brands