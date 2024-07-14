import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <header>
      <nav>
        <div className='flex justify-center items-center gap-1'>
          <span className='isLive'>
            Live &nbsp;&nbsp;<i className='fa-solid fa-satellite-dish'></i>
          </span>
          <span className=' text-white'> Lorem ipsu dolor sit amet </span>
          <span className='isJoin text-white'>
            Join Now &nbsp;&nbsp;<i className='fa-solid fa-circle-play'></i>
          </span>
        </div>
      </nav>
    </header>
  );
}

export { Header };
