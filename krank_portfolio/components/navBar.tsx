import Link from 'next/link';

const NavBar = function () {
  return (
    <nav className='flex flex-row justify-end basis-1/2 p-5 text-white'>
      <Link href="/">
        <a className='no-underline font-sans p-2 hover:text-lg hover:animate-pulse'>Home</a>
      </Link>
      <Link href='/projects'>
        <a className='no-underline font-sans p-2 hover:text-lg hover:animate-pulse'>Projects</a>
      </Link>
      <Link href='/about'>
        <a className='no-underline font-sans p-2 hover:text-lg hover:animate-pulse'>About Me</a>
      </Link>
    </nav>
  );
};

export default NavBar;
