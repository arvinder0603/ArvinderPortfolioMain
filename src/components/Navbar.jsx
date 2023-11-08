import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { logo, close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
      w-full flex items-center py-5   top-0 z-20 bg-primary
    `}
    >
      <div className='w-full flex justify-between p-2 items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {/* Add your logo or any other content here */}
        </Link>
        <div className='flex justify-between w-full '>
          <div className='flex'>
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer'>
              Arvinder <span className='sm:block hidden'>Singh</span>
            </p>
          </div>

          <ul className='list-none hidden sm:flex flex-row gap-10 mt-2'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)} // Corrected the onClick handler
            />

            <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none  flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => { 
                  setToggle(!toggle)
                  setActive(link.title)}}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;