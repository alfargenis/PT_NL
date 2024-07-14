import icongrab from '../../assets/icongrab.png';

function Footer() {
  return (
    <footer className='flex justify-around items-center py-[2%]'>
      <p className='font-bold w-[300px] text-center leading-tight'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <img
        src={icongrab}
        alt='prb_header'
        className='object-fill h-[120px] w-[200px]'
      />
      <p className='font-bold w-[200px] text-center'>
        All rights reserved to Lorem Ipsum© 2022
      </p>
    </footer>
  );
}

export { Footer };
