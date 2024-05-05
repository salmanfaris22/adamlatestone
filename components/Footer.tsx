"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'

const Footer = () => {
    return (
        <footer className="">
          {/* component */}
<footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
  <div className="relative z-[1] container m-auto px-6 md:px-12">
    <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
      <motion.div
      
      variants={fadeIn('up',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
      className="flex flex-wrap items-center justify-between md:flex-nowrap">
       
         
        <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
          <span className="block text-gray-300">We change the way UI components librairies are used</span>
          <span className="block text-gray-300">Tailus Blocks © 2021</span>
          <span className="flex justify-between text-white"> 
         
          </span>
        
        </div>
      </motion.div>
    </div>
  </div>
  <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
    <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl" />
  </div>
  <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80" />
</footer>


{/* <!--

    Add to your stylesheet

.bg-layers {
    -webkit-animation: filter-animation 4s infinite;
    animation: filter-animation 4s infinite;
}

.bg-scale {
    -webkit-animation: filter-animation 8s infinite;
    animation: filter-scale 8s infinite;
}
  
@-webkit-keyframes filter-animation {
    0% {
      -webkit-filter: hue-rotate(0deg);
    }
    50% {
      -webkit-filter: hue-rotate(45deg);
    }
    
    100% {
      -webkit-filter: hue-rotate(0deg);
    }
}
  
@keyframes filter-animation {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(45deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
}

@keyframes filter-scale {
    0% {
      transform:scale(1);
    }
    50% {
      transform:scale(1.4);
    }
    100% {
        transform:scale(.8);
    }
}
--> */}
        </footer>
    )
}

export default Footer
