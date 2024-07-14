import './SecondCard.css';
import Pic2 from '../../assets/Pic2.png';
import Pic3 from '../../assets/Pic3.png';
import Pic4 from '../../assets/Pic4.png';

function SecondCard() {
  return (
    <div className='secondCard'>
      <h1 className='text-6xl mb-8 font-bold'>Lorem ipsum</h1>
      <p className='w-2/4 text-center'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className='secondCardContent'>
        <div className='card'>
          <img src={Pic2} alt='pic2' className='cardImage' />
          <button className='btnCard'>LOREM IPSUM</button>
        </div>
        <div className='card'>
          <img src={Pic3} alt='pic2' className='cardImage' />
          <button className='btnCard'>LOREM IPSUM</button>
        </div>
        <div className='card'>
          <img src={Pic4} alt='pic2' className='cardImage' />
          <button className='btnCard'>LOREM IPSUM</button>
        </div>
      </div>
      <button className='mt-20 rounded-lg py-4 px-9 text-black text-lg font-bold border-2 border-black'>
        LEARN MORE
      </button>
    </div>
  );
}

export { SecondCard };
