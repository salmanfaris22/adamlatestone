
"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import CustomButton from './CustomButton'
import Image from 'next/image'
const Blog = () => {
    return (
        <section className="" id="blog">
            





<div>
  {/* component */}
  <style dangerouslySetInnerHTML={{__html: "@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);" }} />
  <div className="min-w-screen min-h-screen bg-black flex items-center p-5 lg:p-10 overflow-hidden relative">
    <motion.div
       
       variants={fadeIn('up',0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{  once:false,amount:0.2}}
    className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
      <div className="md:flex items-center -mx-10">
        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <motion.div
          
             
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
          className="relative">

            <Image src="/assets/img/hero/bg3.png" alt="" className="w-full relative z-10 p-12 ml-4 bg-cover bg-center bg-no-repeat "  />
            <motion.div
               
      variants={fadeIn('up',0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
            className="border-4 border-red-700 absolute top-10 bottom-10 left-10 right-10 z-0" />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 px-10">
          <motion.div
             
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
          
          className="mb-10">
          <div className='mb-4'>
          <h1 className="font-extrabold uppercase text-3xl ">ADAM SALIM <br /></h1>
            <h4>  Personal Trainer</h4>
          </div>
          
            <p className="text-sm"> Hey everyone, Coach Adam here!  Get ready to ditch the gym membership and transform your body at home. Stay tuned for workout tips, healthy recipes, and motivation to keep you crushing your fitness goals! <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right" /></a></p>
          </motion.div>
          <div>
            <div className="inline-block align-bottom mr-5">
              
            </div>
            
            <motion.div
                  variants={fadeIn('up',0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{  once:false,amount:0.2}}
            
            
            className="inline-block align-bottom"><a  href="https://wa.link/3jc06g">

<CustomButton text='Entroll Know' containerStyles='w-[196px] h-[62px]'/>
            </a>
           
            
            
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
  <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
      <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
        <motion.img
      
          variants={fadeIn('up',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{  once:false,amount:0.2}}
       
        
        className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
      </a>
    </div>
  </div>
</div>




            
        </section>
    )
}

export default Blog
