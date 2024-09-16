import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          {/* <div className='hidden md:block'>
            {/* Avatar */}
            {/* <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            /> */}
          {/* </div> */}
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            <div
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold relative flex items-center'
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
            >
              About Us
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  isAboutDropdownOpen ? 'rotate-180' : ''
                }`}
              />
              {isAboutDropdownOpen && (
                <div className='absolute top-8 left-7 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                  <Link
                    to='/about/team'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Our Team
                  </Link>
                  <Link
                    to='/about/history'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Our History
                  </Link>
                </div>
              )}
            </div>
            <div
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold relative flex items-center'
              onClick={() => setIsBusinessDropdownOpen(!isBusinessDropdownOpen)}
            >
              Business
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  isBusinessDropdownOpen ? 'rotate-180' : ''
                }`}
              />
              {isBusinessDropdownOpen && (
                <div className='absolute top-8 left-7 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                  <Link
                    to='/business/services'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Services
                  </Link>
                  <Link
                    to='/business/partners'
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    Partners
                  </Link>
                </div>
              )}
            </div>
            <Link
              to='/contact'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Contact
            </Link>
            <Link
              to='/login'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
