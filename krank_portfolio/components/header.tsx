import NavBar from './navBar';
import Logo from './logo'

const Header = function () {
  return (
    <div className='flex flex-row justify-between w-full h-1/5 bg-cyan-900'>
      <Logo/>
      <NavBar/>
    </div>
  );
};

export default Header;