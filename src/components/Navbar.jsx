import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-[100vw] flex items-center py-5 fixed top-0 z-50 bg-slate-900 navbar-z-index backdrop-filter backdrop-blur-md bg-opacity-60`}
    >
      <div className="w-full flex justify-around items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }
        }
        >
          <img src={logo}  alt="logo" className="w-9 h-9 object-contain cursor-pointer mr-[-5px]"/>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            inhal
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-gray-300"
                } hover:text-white text-[18px] font-medium cursor-pointer`}>
                <Link 
                      activeClass="active"
                      to={`${link.id}`}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={200}
                    >
                      {link.title}
                    </Link>
                    {/* <a href={`#${link.id}`}>{link.title}</a> */}
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu} alt="menu" 
          className="w-[2rem] h-[2rem] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}

          />

          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 absolute top-20 right-0 mx-1  min-w-[140px] z-10 rounded-xl bg-slate-900 navbar-z-index backdrop-filter backdrop-blur-md bg-opacity-60`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-gray-400"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <Link 
                      activeClass="active"
                      to={`${link.id}`}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={200}
                    >
                      {link.title}
                    </Link>
                    {/* <a href={`#${link.id}`}>{link.title}</a> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar