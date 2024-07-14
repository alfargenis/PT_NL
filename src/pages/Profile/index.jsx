import { useState } from 'react';
import UserList from '../../components/UserList';
import UserSearch from '../../components/UserSearch';
import UserUpdate from '../../components/UserUpdate';
import UserDelete from '../../components/UserDelete';
import { useAuth } from '../../context/authContext';

function Profile() {
  const [view, setView] = useState('list');
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-8'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Profile</h1>
      <div className='flex justify-center gap-4 mb-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setView('list')}
        >
          List Users
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setView('search')}
        >
          Search User by ID
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setView('update')}
        >
          Update User by ID
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setView('delete')}
        >
          Delete User by ID
        </button>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {view === 'list' && <UserList />}
      {view === 'search' && <UserSearch />}
      {view === 'update' && <UserUpdate />}
      {view === 'delete' && <UserDelete />}
    </div>
  );
}

export { Profile };
