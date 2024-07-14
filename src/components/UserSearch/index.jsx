import { useState } from 'react';
import { getUserByIdRequest } from '../../api/auth';
import { toast, ToastContainer } from 'react-toastify';

function UserSearch() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await getUserByIdRequest(userId);
      setUser(response.data);
      toast.success('User found successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error fetching user', error);
      toast.error('Error fetching user', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='flex flex-col justify-center max-w-md mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md border g-4'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Search User by ID</h2>
      <div className='flex flex-col gap-3'>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='Enter user ID'
          className='w-full p-2 pl-10 text-sm text-gray-700 border g-2 border-gray-700 rounded-md'
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {user && (
        <div className='mt-4 flex flex-col items-center'>
          <h3 className='font-bold'>User Details</h3>
          <p>ID: {user._id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Create: {user.createAd}</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default UserSearch;
