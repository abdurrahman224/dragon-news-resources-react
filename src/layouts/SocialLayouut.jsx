import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const SocialLayouut = () => {
  return (
    <div>
      <h2 className='font-semibold mb-3'>Login with </h2>

      <div className=' *:w-full space-y-2'>
        <button className="btn">
       
        
            <FaGoogle />
         
          Google
        </button>

        <button className='btn'>
        
          <FaFacebook />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLayouut;
