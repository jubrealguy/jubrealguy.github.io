import profile_img from '../img/Jubreel_Adebayo.jpeg'

const About = () => {
    return (
        <section className='about' id='about'>
           <div className='img-box'>
                <img src={profile_img} alt='' className='about__image' />
           </div>
           <div className='about__content'>
                <h1 className='about__header'>Hi, I'm <span>Adebayo Jubreel</span></h1>
                <p className='about__paragraph'>I am a <span>Software Developer</span> that specializes in frontend development. I have built a solid passion for coding over the years. I am available for frontend engineering projects. You can connect with me on <a href="https://www.twitter.com/debayo_realest">Twitter</a></p>
                <div className="link-box">
                    <a href="https://www.github.com/jubrealguy" className="about__link">View my Github</a>
                </div>
           </div>
        </section>
    )
}

export default About;