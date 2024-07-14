import { useState } from 'react';
import { updateUserRequest } from '../../api/auth';
import { toast, ToastContainer } from 'react-toastify';

function UserUpdate() {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      await updateUserRequest(userId, { username, email, password });
      toast.success('User updated successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error updating user', error);
      toast.error('Error updating user', {
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
      <h2 className='text-2xl font-bold mb-4 text-center'>Update User by ID</h2>
      <div className='flex flex-col gap-3'>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='Enter user ID'
          className='w-full p-2 pl-10 text-sm text-gray-700 border g-2 border-gray-700 rounded-md'
        />
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter new username'
          className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-700 rounded-md'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter new email'
          className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-700 rounded-md'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter new password'
          className='w-full p-2 pl-10 text-sm text-gray-700 border border-gray-700 rounded-md'
        />
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={handleUpdate}
      >
        Update
      </button>
      <ToastContainer />
    </div>
  );
}

export default UserUpdate;
