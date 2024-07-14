import { useEffect, useState } from 'react';
import { getUsersRequest } from '../../api/auth';

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await getUsersRequest(page, 10);
      setUsers(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
      console.log(users.length);
      setError(null);
    } catch (error) {
      setError('Error fetching users');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, [users]);

  return (
    <div className='p-4 h-screen bg-white'>
      <div className='flex justify-between mb-4'>
        <h2 className='text-2xl font-bold'>User List</h2>
        <p className='text-lg font-mono'>{`Total users: ${users.length}`}</p>
      </div>
      {loading ? (
        <p className='text-lg'>Loading...</p>
      ) : error ? (
        <p className='text-lg'>{error}</p>
      ) : (
        <ul className='list-disc pl-5'>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id} className='mb-2 border-b border-gray-300'>
                ({user._id}) {user.username} ({user.email})
              </li>
            ))
          ) : (
            <p className='text-lg'>No users found</p>
          )}
        </ul>
      )}
      <div className='flex justify-between mt-4'>
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50'
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <p className='text-lg font-mono'>{`Page ${page} of ${totalPages}`}</p>
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50'
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
