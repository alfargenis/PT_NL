import './ThreeCard.css';
import Pic5 from '../../assets/Pic5.png';
function ThreeCard() {
  return (
    <div className='threeCard'>
      <div className='threeCardContent'>
        <p className='textCardThree'>Lorem ipsum dolor sit amet, consetetur</p>
        <button className='btnThreeCard'>LOREM IPSUM DOLOR SIT</button>
        <button className='mt-4 rounded-lg py-4 px-6 text-white bg-transparent border-2 border-b-gray-400 border-r-gray-400 border-white text-lg font-bold w-full shadow-lg '>
          LOREM IPSUM DOLOR SIT AMET
        </button>
      </div>
      <img src={Pic5} alt='pic5' className='threeCardImage' />
    </div>
  );
}

export { ThreeCard };
