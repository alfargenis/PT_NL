import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
      <p className='text-2xl text-gray-800 mb-8'>Page Not Found</p>
      <Link
        to='/'
        className='px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded hover:bg-green-600'
      >
        Go Back Home
      </Link>
    </div>
  );
}

export { NotFound };
