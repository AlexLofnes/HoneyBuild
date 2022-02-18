import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-300 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg className="w-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.000000 183.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M1077 1683 c-17 -16 -2 -43 58 -109 l65 -72 -16 -38 c-22 -52 -15 -135 16 -175 l22 -31 -31 -31 -31 -31 -27 20 c-32 24 -47 50 -65 114 -10 36 -26 55 -78 97 -69 56 -105 65 -105 26 0 -15 19 -38 60 -70 51 -41 62 -56 72 -97 7 -26 19 -58 27 -71 l15 -22 -77 24 c-316 99 -571 126 -686 74 -80 -36 -81 -38 -56 -110 51 -152 153 -251 276 -268 38 -5 55 -15 98 -58 58 -58 132 -89 242 -101 59 -6 62 -5 182 55 67 34 122 59 122 57 0 -2 -52 -48 -115 -101 -122 -102 -138 -124 -150 -192 -5 -34 -18 -54 -67 -101 -43 -41 -59 -64 -55 -76 12 -31 48 -16 112 46 57 57 64 68 70 116 7 49 11 56 76 114 93 84 100 87 93 46 -16 -82 -102 -235 -215 -381 -75 -96 -84 -119 -52 -131 24 -10 123 107 208 246 25 40 46 65 49 57 2 -8 9 -38 15 -68 24 -116 111 -250 185 -285 51 -24 97 -20 145 12 82 55 147 168 175 306 l12 60 33 -58 c38 -65 133 -195 178 -244 31 -32 56 -35 67 -7 2 7 -27 53 -65 102 -108 136 -201 296 -225 386 -15 56 -20 59 93 -40 67 -60 72 -66 78 -116 6 -47 13 -58 70 -114 64 -63 100 -78 112 -47 4 12 -12 35 -55 76 -49 47 -62 67 -67 101 -12 68 -28 90 -150 192 -63 53 -115 99 -115 101 0 2 55 -23 122 -57 120 -60 123 -61 182 -55 111 12 184 43 244 103 35 34 62 53 77 53 44 0 132 40 179 81 32 28 58 66 85 122 60 124 60 131 6 162 -67 40 -162 52 -293 37 -109 -12 -285 -52 -424 -95 l-77 -24 15 22 c8 13 20 45 27 71 10 41 21 56 72 97 41 32 60 55 60 70 0 39 -36 30 -105 -26 -52 -42 -68 -61 -78 -97 -18 -64 -33 -90 -65 -114 l-27 -20 -32 31 -31 31 23 33 c31 42 38 121 16 173 l-16 38 65 73 c66 73 78 101 49 112 -11 4 -39 -17 -89 -67 l-72 -72 -34 18 c-23 12 -55 18 -99 18 -44 0 -76 -6 -99 -18 l-34 -18 -71 71 c-69 68 -85 79 -99 64z m482 -924 c21 -62 29 -60 -181 -57 -212 3 -202 0 -178 64 9 24 10 24 179 24 l169 0 11 -31z m27 -154 c4 -8 3 -26 0 -40 l-6 -25 -205 0 -205 0 0 40 0 40 205 0 c174 0 207 -2 211 -15z m-23 -151 c3 -3 0 -22 -7 -42 l-13 -37 -165 -3 -165 -2 -11 38 c-7 22 -12 42 -12 46 0 8 365 8 373 0z m-83 -184 c-16 -31 -74 -70 -103 -70 -26 0 -107 62 -107 81 0 5 50 9 110 9 107 0 110 -1 100 -20z"/>
              </g>
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              EMERY'S HONEY
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-yellow-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='btn-nav'>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='btn-nav'>
                About
              </a>
            </Link>
            <Link href='/'>
              <a className='btn-nav'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};