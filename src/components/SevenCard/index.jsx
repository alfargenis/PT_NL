import './SevenCard.css';
import Pic7 from '../../assets/Pic7.png';
import Pic8 from '../../assets/Pic8.png';
import Pic9 from '../../assets/Pic9.png';

function SevenCard() {
  return (
    <div className='sevenCard'>
      <h1 className='text-[56px] text-white font-bold mb-6'>Lorem ipsum</h1>
      <div className='flex gap-[5%]'>
        <img src={Pic7} alt='pic' className='object-fill w-[300px] h-[400px]' />
        <img src={Pic8} alt='pic' className='object-fill w-[300px] h-[400px]' />
        <img src={Pic9} alt='pic' className='object-fill w-[300px] h-[400px]' />
      </div>
      <div className='flex mt-[2%] w-full justify-center gap-[2%]'>
        <i className='fa-solid fa-circle text-white'></i>
        <i className='fa-regular fa-circle text-white'></i>
        <i className='fa-regular fa-circle text-white'></i>
      </div>
      <button className='btnStandar text-black bg-white mt-[5%]'>
        VIEW ALL
      </button>
    </div>
  );
}

export { SevenCard };
