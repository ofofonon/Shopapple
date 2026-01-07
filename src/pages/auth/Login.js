import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Google from '../../../src/Assets/pngwing.com(10) 1.png';



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    setLoading(true);
    setServerError('');
  
    try {
      const response = await fetch('https://afrivate-backend-test.onrender.com/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username_or_email: formData.email,
          password: formData.password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
  
      // Save token to localStorage (if backend returns one)
      if (data.access) {
        localStorage.setItem('token', data.access);
      }
  
      navigate('/dashf'); // redirect after successful login
    } catch (err) {
      console.error('Login error:', err.message);
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };
  


  

  return (
    <div className="bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">


      <div className="bg-gradient-to-b from-[rgba(51,0,102,1)] via-[rgba(120,50,200,0.8)] to-[rgba(182,120,255,1)] p-[0.125rem] rounded-[0.9375rem] sm:rounded-[0.9375rem]  sm:mx-auto sm:w-full sm:max-w-md">
        
        <div className="bg-[rgba(246,246,246)]  py-8 px-7 rounded-[0.9375rem] shadow sm:rounded-[0.9375rem] sm:px-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-4xl font-bold text-center text-[#45005A]">
          LOG IN
        </h1>
        <p className="text-center text-[#45005A] mt-2 mb-8 font-medium">
          Please login into your account
        </p>
      </div>

      <div className="flex bg-white mb-3 w-full  text-[#45005A] font-bold text-lg py-4 rounded-[0.9375rem] ">
      <img src={Google} alt="Google logo" className="w-[1.375rem] h-[1.375rem] mx-4 ml-5 mt-1" /> Login with Google <i class="fas fa-solid fa-arrow-right ml-6 mt-1"></i>
      </div>

      <div className="relative mx-2 mb-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black " />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-[rgba(246,246,246)] text-black font-medium">Or</span>
              </div>
            </div>


          <form onSubmit={handleSubmit} className="space-y-6 px-2">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot Password?
              </Link>
            </div>

            {serverError && (
               <p className="text-red-500 text-sm text-center">{serverError}</p>
              )}
              <Button type="submit" disabled={loading} className="w-full mt-6 py-3 rounded-full text-white font-bold text-sm">
                 {loading ? 'Logging in...' : 'Log in'}
              </Button>

            
          </form>

         

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 