
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
  return (
    <div className="max-:mx-auto">
      <Header />
      <LatestNews />
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;