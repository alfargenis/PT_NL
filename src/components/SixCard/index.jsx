import './SixCard.css';
import Pic6 from '../../assets/Pic6.png';
function SixCard() {
  return (
    <div className='sixCard relative'>
      <img
        src={Pic6}
        alt='background'
        className='absolute w-full object-fill z-[-1] max-h-[600px]'
      />
      <div className='w-2/5 ml-5p mt-[10%]'>
        <h1 className='text-[56px] font-bold'>Lorem ipsum</h1>
        <p className='w-full'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button className='btnStandar mt-[10%]'>VIEW ALL</button>
      </div>
    </div>
  );
}

export { SixCard };
