import { useState } from 'react';
import { deleteUserRequest } from '../../api/auth';
import { toast, ToastContainer } from 'react-toastify';

function UserDelete() {
  const [userId, setUserId] = useState('');

  const handleDelete = async () => {
    try {
      await deleteUserRequest(userId);
      toast.success('User deleted successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error deleting user', error);
      toast.error('Error deleting user', {
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
    <div className=' flex flex-col items-center max-w-md mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md border'>
      <h2 className='text-2xl font-bold mb-4'>Delete User by ID</h2>
      <input
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder='Enter user ID'
        className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-700 rounded-md'
      />
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 max-w-24'
        onClick={handleDelete}
      >
        Delete
      </button>
      <ToastContainer />
    </div>
  );
}

export default UserDelete;
