export const fadeIn = (direaction:string, delay: number)=>{
    return {
        hidden:{
            y:direaction === 'up' ? 40 : direaction === 'down' ? -40:0,
            opacity:0,
            x:direaction === 'left' ? 40 : direaction === 'right' ? -40:0,
            transition:{
                type: 'tween',
                duration:1.4,
                delay:delay,
                ease :[0.25,0.6,0.3,0.8]
            }
        },

        show:{
          y:0,
          x:0,
          opacity:1,
          transition:{
            type: 'tween',
            duration:1.3,
            delay:delay,
            ease :[0.25,0.25,0.25,0.75]
        }

        }
    }
}