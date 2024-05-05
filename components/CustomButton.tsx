import React from 'react'

const CustomButton = ({text, containerStyles} : {text : string; containerStyles:string }) => {
    return (
       <button className={`${containerStyles} group relative cursor-pointer overflow-hidden uppercase bg-red-700`}>
        <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20
        rotate-45 bg-black duration-300 group-hover:h-64 group-hover:-translate-y-32 transition-all
        '></span>
        <span className='ease relative text-white transition duration-300 group-hover:text-white'>{text}</span>
       </button>
    )
}

export default CustomButton
