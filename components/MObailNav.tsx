
"use client"

import { useMediaQuery } from 'react-responsive'
import {Link as ScrollLink} from 'react-scroll'

const links = [
    {name : 'home', target :'home', offset : -100},
    {name : 'blog', target :'blog', offset : -0},
    {name : 'about', target :'about', offset : -80},
    {name : 'class', target :'class', offset : -80},
    {name : 'Gym Managment', target :'team', offset : -0},
    {name : 'prices', target :'prices', offset : -40},
  

    {name : 'contact', target :'contact', offset : -0},
]



const MObailNav = ({containerStyles} : { containerStyles : string}) => {
  
    const isMobail = useMediaQuery({
        query : '(max-width: 640px)'
    })
 

  return (
    <nav className={`${containerStyles}`}>
            {links.map((link, index) =>{
        return <ScrollLink offset={link.offset} to={link.target}
        smooth 
        spy
        activeClass={`${!isMobail && 'active'}`}
        className='cursor-pointer hover:text-red-600 transition-all'
        key={index}
        >
          <div>
          {link.name}
          </div>
        
        
        </ScrollLink>})}
    </nav>
  )
}

export default MObailNav