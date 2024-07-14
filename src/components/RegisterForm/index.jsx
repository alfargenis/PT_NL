import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/Profile');
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (RegisterErrors.length > 0) {
      RegisterErrors.forEach((error) => {
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
  }, [RegisterErrors]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
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
              placeholder='username'
              {...register('username', { required: true })}
            />
            {errors.username && (
              <p className='text-red-500'>Username is required</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
              type='email'
              placeholder='Email'
              {...register('email', { required: true })}
            />
            {errors.email && <p className='text-red-500'>Email is required</p>}
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
              placeholder='Password'
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <div className='flex flex-col gap-3 items-center justify-between'>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Register
            </button>
            <div className='flex items-center gap-1'>
              <p>Already have an account?</p>
              <Link to='/login' className='text-blue-500 hover:text-blue-700'>
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export { RegisterForm };
