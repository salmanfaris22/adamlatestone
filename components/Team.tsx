"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import Image from 'next/image'

const Team = () => {
    return (
        <section className="" id="team">
           {/* component */}
<section>
  <div className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <motion.div
         variants={fadeIn('up',0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{  once:false,amount:0.2}}
      
      className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Gym Managment</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
        Streamline your gym operations with our efficient management solutions. From membership tracking to class scheduling, we ve got you covered. Elevate your gym experience for both staff and members alike
        </p>
        <a href="#" className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
          Explore Now</a>
      </motion.div>
      <motion.div
      variants={fadeIn('up',0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{  once:false,amount:0.2}}
      
      className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border" style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
            <div className="border-2-2 border-yellow-555 absolute h-full border" style={{left: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
           
           
           
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Aerobics training</p>
              
              </motion.div>
            </div>
           
           
           
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Zumba</p>
               
              </motion.div>
            </div>
            
           
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Pilates training</p>
              
              </motion.div>
            </div>
            
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Injury rehabilitation
                <br />
                (physiotherapy)</p>
               
              </motion.div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Water fitness</p>
              
              </motion.div>
            </div> <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Advance strength training
                <br />
           </p>
               
              </motion.div>
            </div>
            
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Function strength training</p>
              
              </motion.div>
            </div> 




            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Sports conditioning
                <br />
        </p>
               
              </motion.div>
            </div>
        


            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Nutrition advice</p>
              
              </motion.div>
            </div> 


            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Sports yoga
                <br />
             </p>
               
              </motion.div>
            </div>
        
        
        
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Musical yoga</p>
              
              </motion.div>
            </div> 

        
        
        
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Tabata training
                <br />
            </p>
               
              </motion.div>
            </div>
        
        
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Kridasan</p>
              
              </motion.div>
            </div> 

        
        
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Kids session
                <br />
               </p>
               
              </motion.div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Online training </p>
              
              </motion.div>
            </div> 


   
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Meditation
                <br />
               </p>
               
              </motion.div>
            </div>





            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Bodybuilding</p>
              
              </motion.div>
            </div> 



            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Motivational speaking
                <br />
              </p>
               
              </motion.div>
            </div>


            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Fun training session</p>
              
              </motion.div>
            </div> 






            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Group training
                <br />
              </p>
               
              </motion.div>
            </div>


            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
              variants={fadeIn('up',0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{  once:false,amount:0.2}}
              
              className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">Group personal training</p>
              
              </motion.div>
            </div> 


            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <motion.div
                 variants={fadeIn('up',0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{  once:false,amount:0.2}}
              className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">Family training
                <br />
              </p>
               
              </motion.div>
            </div>

          </div>

          <motion.div
             variants={fadeIn('up',0.6)}
             initial='hidden'
             whileInView={'show'}
             viewport={{  once:false,amount:0.2}}
          >    <Image className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" alt={''} />

          </motion.div>
      
        </div>
      </motion.div>
    </div>
  </div>
</section>

        </section>
    )
}

export default Team
