import HeroSlider from "./Hero.slider";


const Hero = () => {
    return (
        <section className="h-[80vh] lg:h-[912px] bg-hero bg-black" id="home">
            <div className="container max-auto h-full relative">
                <video autoPlay loop muted className="w-full h-full absolute inset-0 object-cover">
                    
                    <source src="/assets/img/hero/gym.mp4" type="video/mp4" />
                 
                    {/* Add more <source> tags for different video formats if needed */}
                </video>
                <div className="w-full h-full relative z-10">  
                
                    <HeroSlider />
                </div>
            </div>
        </section>
    );
};

export default Hero;
