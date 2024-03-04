import './Slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pancake from '../assets/pancake.jpg'

export const Slider = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
    
    
    return(
       <>
       <h2>Our Signature Categories</h2>
       <Carousel responsive={responsive}>
  <div>
    <p>Holland Pancakes</p>
    <pancake/>
  </div>
  <div>
    <p>Brownie Brottles</p>
    {pancake}
  </div>
  <div>
   <p>Waffles</p>
  {pancake}
  </div>
  <div>
   <p>French Crepe</p>
   {pancake}
  </div>
</Carousel>
       
       </>
     )
}






export default Slider;