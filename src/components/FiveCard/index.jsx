import './FiveCard.css';
import JoinUs from '../../assets/Join Us.png';

function FiveCard() {
  return (
    <div className='fiveCard relative'>
      <img
        src={JoinUs}
        alt='background'
        className='absolute w-full object-fill z-[-1] max-h-[800px]'
      />
      <div className='formFiveCard'>
        <h1 className='text-[56px] font-bold text-white m-[2%]'>JOIN US</h1>
        <h1 className='text-lg font-bold text-white m-[2%]'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        </h1>
        <div className='flex'>
          <input
            type='text'
            className='inputFormBasic mr-0 w-full'
            placeholder='Name'
          />
          <input
            type='text'
            className='inputFormBasic w-full'
            placeholder='Username'
          />
        </div>
        <div className='flex'>
          <input
            type='text'
            className='inputFormBasic mr-0 w-full'
            placeholder='Phone'
          />
          <input
            type='text'
            className='inputFormBasic w-full'
            placeholder='Email'
          />
        </div>
        <input
          type='text'
          className='inputFormBasic'
          placeholder='Department'
        />
        <textarea
          className='inputFormBasic h-32 pt-4'
          placeholder='Message'
        ></textarea>
        <button className='btnStandar max-w-fit my-2 ml-4'>I’M IN</button>
        <p className='text-base font-bold text-white m-2 text-center'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </div>
  );
}

export { FiveCard };
