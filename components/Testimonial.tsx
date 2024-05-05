

'use client'

import { Swiper , SwiperSlide } from 'swiper/react'

import  "swiper/css"
import "swiper/css/navigation"

import SwiperNav from './SwiperNav'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import Image from 'next/image'

const Testimonial = () => {
    return (
       <Swiper className='h-full '>
        <SwiperSlide >
        <motion.section
         variants={fadeIn('up',0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{  once:false,amount:0.2}}
        
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            Training with my gym instructor has been a transformative experience. Their knowledge and guidance have not only improved my strength and fitness but also instilled a newfound confidence in me. I couldn t have asked for a more dedicated and supportive trainer.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-10 w-10 rounded-full"
              src="https://th.bing.com/th/id/OIP.ueWoSOP2NBNORHxxLiuXxQHaHa?rs=1&pid=ImgDetMain"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </motion.section>
</SwiperSlide>

<SwiperSlide >
<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
       
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            I cant thank my gym trainer enough for the incredible progress I ve made. Their tailored workouts and constant motivation have helped me surpass my fitness goals. Their passion for helping others achieve success in their fitness journey truly sets them apart.
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-10 w-10 rounded-full"
              src="https://img.freepik.com/premium-photo/portrait-handsome-asian-man-image-generated-by-ai_803126-1222.jpg"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">jeffry</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">traider</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
</SwiperSlide>








{/* wpiper nav ntn */}

       </Swiper>
    )
}

export default Testimonial
