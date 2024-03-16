import './Hero.css'
import image from '../Assest/8bc90f9f78e0c349db7d26b945096a66.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <div className='hero-left'>
                    <img src={image} alt=''/>
                </div>

            </div>
        </div>
      );
}
 
export default Hero;