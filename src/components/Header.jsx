import moment from 'moment/moment';
import logo from '.././assets/logo.png';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center m-6 ">
      <img src={logo} alt="Logo" />
      <h3 className='text-gray-400  font-bold pt-4'>
         organisation and the highest circulated English daily
        
      </h3>
      <p className='text-sm pt-2 text-gray-300'>{ moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
};

export default Header;
