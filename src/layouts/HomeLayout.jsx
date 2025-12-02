import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import LeftNavar from '../components/loyout-component/LeftNavar';
import Navber from '../components/Navber';
import RightNaver from './RightNaver';

const HomeLayout = () => {
  return (
    <div className="max-:mx-auto">
      <Header />
      <section className="w-11/12 mx-auto px-2">
        <LatestNews />
      </section>
      <nav className="w-11/12 mx-auto px-2">
        <Navber />
      </nav>
      <main className=" w-11/12 mx-auto py-2 grid grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavar />{' '}
        </aside>
        <section className="col-span-6">
          <div className='px-6'>Drogon news Home </div>
          <Outlet />
        </section>
        <aside className="col-span-3 ">
          <RightNaver />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
