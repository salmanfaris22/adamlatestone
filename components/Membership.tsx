
"use client"

import { fadeIn } from "@/lib/variants"
import { motion } from "framer-motion"
import CustomButton from './CustomButton'

const Membership = () => {
    return (
        <section className='bg-membership bg-no-repeat h-full w-full' id="prices">
         <motion.div
           variants={fadeIn('up',0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{  once:false,amount:0.2}}
         
         className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block text-white px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            Our Pricing
          </p>
        </div>
        <h2 className="max-w-lg  mb-6  text-3xl font-bold  tracking-tight text-red-700 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Transparent</span>
          </span>{' '}
          pricing. Pay as you grow.
        </h2>
        <p className="text-base text-white md:text-lg">
        Unlock your fitness potential without breaking the bank - explore our competitive pricing options tailored to your goal
        </p>
      </div>
      <motion.div
        variants={fadeIn('up',0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{  once:false,amount:0.2}}
      
      className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Normal group training</div>
            <div className="flex items-center justify-center mt-2">     <div className="text-gray-700">starting at /</div>
            <div className="mr-1 text-5xl font-bold">$12</div>
              <div className="text-gray-700">/ mo</div>
            </div>
          <motion.img

          variants={fadeIn('up',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{  once:false,amount:0.2}}
          src="https://th.bing.com/th/id/R.a41c6ebfc227dcb1815353f98564974e?rik=HnVAZC%2foyUau3w&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f6%2fFitness-PNG-HD-Quality.png&ehk=ny%2f%2bC4jitLqBxk996%2fs3gyZoMQyYppNtmKV0LUyjIbo%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          <div>
            <a
              href=""
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 focus:shadow-outline focus:outline-none"
            >
                <motion.div
                 variants={fadeIn('up',0.5)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              ><div>

<a href="https://wa.link/3jc06g">

               <CustomButton
                containerStyles='w-[164px] h-[46px]'
                text='by now'
                />
</a>
              </div>
              
              </motion.div>
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>


        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Personal training</div>
            <div className="flex items-center justify-center mt-2">     <div className="text-gray-700">starting at /</div>
              <div className="mr-1 text-5xl font-bold">$60</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
           
            </div>
          </div> <motion.img
            variants={fadeIn('up',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{  once:false,amount:0.2}}
          
          src="https://th.bing.com/th/id/R.8d2b2d8e3e295cf847169198f7768946?rik=Sr5Yx4YHK7Ve9w&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fFitness-PNG-Free-Download.png&ehk=x0JKpcE0azMuEXFhRqr2SuHpIZj%2fDg0CBBid5YO5pc8%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <div>
          <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 focus:shadow-outline focus:outline-none"
            >
              <motion.div
                 variants={fadeIn('up',0.5)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              >
               <div>

<a href="https://wa.link/3jc06g">

               <CustomButton
                containerStyles='w-[164px] h-[46px]'
                text='by now'
                />
</a>
              </div>
              </motion.div>
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Physiotherapy</div>
            <div className="flex items-center justify-center mt-2">
            <div className="text-gray-700">starting at /</div>
              <div className="mr-1 text-5xl font-bold"> $25</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
        
            </div>
            
          </div>
          <motion.img
          
          variants={fadeIn('up',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{  once:false,amount:0.2}}
          src="https://th.bing.com/th/id/OIP.w0pqCOZmobjmMfcWTMq8bQHaEc?rs=1&pid=ImgDetMain" alt="" />
          <div>
          <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 focus:shadow-outline focus:outline-none"
            >
              <motion.div
                 variants={fadeIn('up',0.5)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              >
              <div>

<a href="https://wa.link/3jc06g">

               <CustomButton
                containerStyles='w-[164px] h-[46px]'
                text='by now'
                />
</a>
              </div>
              </motion.div>
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Sed ut unde omnis iste natus accusantium doloremque.
            </p>
          </div>
        </div>
       
      </motion.div>
    </motion.div>
        </section>
    )
}

export default Membership
