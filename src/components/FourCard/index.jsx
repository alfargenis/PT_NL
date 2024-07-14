import './FourCard.css';
import Pic1 from '../../assets/Pic1.png';
function FourCard() {
  return (
    <div className='fourCard mt-10'>
      <h1 className=' text-5xl font-bold mb-10'>Latest videos</h1>
      <div className='fourCardContent'>
        <div className='fourCardFile'>
          <i className='absolute text-white fa-solid fa-play'></i>
          <img src={Pic1} alt='file' className='object-cover max-w-xs' />
          <p className='m-5p'>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className='fourCardFile'>
          <i className='absolute text-white fa-solid fa-play'></i>
          <img src={Pic1} alt='file' className='object-cover max-w-xs' />
          <p className='m-5p'>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className='fourCardFile'>
          <i className='absolute text-white fa-solid fa-play'></i>
          <img src={Pic1} alt='file' className='object-cover max-w-xs' />
          <p className='m-5p'>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className='fourCardFile'>
          <i className='absolute text-white fa-solid fa-play'></i>
          <img src={Pic1} alt='file' className='object-cover max-w-xs' />
          <p className='m-5p'>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className='fourCardFile'>
          <i className='absolute text-white fa-solid fa-play'></i>
          <img src={Pic1} alt='file' className='object-cover max-w-xs' />
          <p className='m-5p'>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className='fourCardFile'>
          <i className='absolute text-white fa-solid fa-play'></i>
          <img src={Pic1} alt='file' className='object-cover max-w-xs' />
          <p className='m-5p'>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
      </div>
      <button className='btnFourCard mt-2 mb-16'>VIEW ALL</button>
    </div>
  );
}

export { FourCard };
