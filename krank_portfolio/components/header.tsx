import NavBar from './navBar';
import Logo from './logo';
import Dropdown from './dropdown';

const Header = function () {
  return (
    <div>
      <div className='flex flex-row justify-between w-full h-1/5 bg-cyan-900/75'>
      <Logo/>
      <NavBar/>
      </div>
      <Dropdown/>
    </div>
  );
};

export default Header;