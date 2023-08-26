
import banner from '../../../assets/mern stack, full stack, frontend developer,Js developer.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className='rounded'>
     <img src={banner} alt="" className='rounded'/>
    </div>
  );
};

export default Banner;
