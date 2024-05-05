"use client"
import CountUp from "react-countup"
import {FaBriefcase,FaClock, FaTrophy} from "react-icons/fa"


import { motion , useInView } from "framer-motion"
import { useRef } from "react"
import { ImUser } from "react-icons/im"










//animation 


const statsContainerVariant = {
    hidden :{opacity: 0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.4,
            duration:0.5,
            ease: 'linear',
        }
    }
}

const statsItem ={
    hidden :{y:20,opacity: 0},
    show:{
        y:0,
        opacity:1,
        transition:{
           
            duration:0.5,
            ease: [0.25,0.6,0.3,0.8],
        }
    }

}




const stats = [
    {
        number:24,
        icon: FaBriefcase,
        text: 'trainig cousrce'
    },
    {
        number:918,
        icon: FaClock,
        text: 'working hours'
    },
    {
        number:169,
        icon:ImUser,
        text: 'happy customers'
    },
    {
        number:12,
        icon:FaTrophy,
        text: 'international awards'
    },
]

const Achievements = () => {

const ref=useRef(null)
const isInView = useInView(ref)

    return (
       <section>
        <div className="container mac-auto">
          <motion.div 
          variants={statsContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {stats.map((item, index) =>{
                return  (
                    <motion.div
                    variants={statsItem}
                    className="flex flex-col justify-center items-center" key={index}>

                        <div className="border border-red-900 w-[140px] h-[140px] mx-auto 
                        rounded-full p-1 mb-6
                        ">

                            <div 
                            ref={ref}
                            className="border border-red-700 w-full h-full flex
                            items-center justify-center text-5xl rounded-full
                            ">{
                                isInView &&(   <CountUp start={0} end={item.number} duration={6}/>)
                            }
                              

                            </div>

                        </div>


                        <div className="flex flex-col justify-center items-center text-center">
                          <item.icon className="text-3xl mb-2"/>
                          <h4 className="h4">{item.text}</h4>
                        </div>

                    </motion.div>
                )
            })}
            </motion.div>  
        </div>
       </section>
    )
}

export default Achievements
