import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/Profile');
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (signinErrors.length > 0) {
      signinErrors.forEach((error) => {
        toast.error(error, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  }, [signinErrors]);

  const onSubmit = handleSubmit(async (values) => {
    signin(values);
  });

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
        <ToastContainer />
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
              type='text'
              id='username'
              placeholder='username'
              {...register('username', { required: true })}
            />
            {errors.username && (
              <p className='text-red-500'>Username is required</p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
              type='password'
              id='password'
              placeholder='password'
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className='text-red-500'>Password is required</p>
            )}
          </div>
          <div className='flex flex-col gap-3 items-center justify-between'>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Login
            </button>
            <div className='flex items-center gap-1'>
              <p>Dont have an account?</p>
              <Link
                to='/register'
                className='text-blue-500 hover:text-blue-700'
              >
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export { LoginForm };
