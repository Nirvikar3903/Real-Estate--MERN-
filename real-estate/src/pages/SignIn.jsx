import { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';


export default function SignIp() {
  const [formData , setFormData] = useState({}); 
  const [loading ,setLoading] = useState(false)
  const [error , setError ] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id] : e.target.value,
      });
    };
    
    
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      setLoading(true);
    
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return ;
      }; 
      setLoading(false);
      setError(null);
      navigate('/sign-in');  

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };


  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
      <form disabled={loading} onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange}></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange}></input>
        <button  className='bg-slate-700  text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity- 80'>
           {loading ? 'Loading...':'Sign in'} 
           </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={'/sign-up'}>
        <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}


////{loading ? 'loading...' : 'Sign Up'}  disabled={loading} if loading uis true button disabled 