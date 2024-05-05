"use client"






import { fadeIn } from "@/lib/variants"
import Achievements from "./Achievements"








const featured = [
  {
    icon: "s",
    title :"award-winnig traneas",
    subtitle : "Experience award-winning training expertise that transcends limits and redefines fitness journeys"
  },
  {
    icon: "s",
    title :"exellent prices",
    subtitle : "Discover unbeatable prices that match our excellent quality - fitness solutions that won't break the bank"
  },
  {
    icon: "s",
    title :"modern equpment",
    subtitle : "Experience peak performance with our state-of-the-art modern equipment, designed to elevate your fitness journey to new heights"
  },
]

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb:28" id="about">
      <div className="container max-auto">
        <div
          
        className="fe=lex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center ">About us</h2>
          <p className="max-w-[600px] mx-auto text-center">loea iusfhgis fhig shfig hsofhgosfhgo shfoghjsofgh 
             sofhjgo sf ogs fhjojoJodjfgo ojdfo jfogj of j fi  go lanbgui oa  oho  oah oa oa oao oa hprewac t ig 
             hgi ishf isariya jfg 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
           {featured.map((feature, index)=>{
            return(
              <div
             
              className="flex border p-10  flex-col justify-center items-center gap-4" key={index}>
                 <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px]
                 rounded-full flex justify-center items-center
                 ">{feature.icon}</div>
                 <div className="flex text-center flex-col justify-center items-center">
                  <h1 className=" h4 text-red-700">{feature.title}</h1>
                  <p>{feature.subtitle}</p>
                 </div>
              </div>
            )
           })}
        </div>


        <Achievements/>
      </div>
    
    </section>
  )
}

export default About
