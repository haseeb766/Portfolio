import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import resume from '../../pdf/M.Haseeb.pdf';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  // Mobile Navbar Open
  const handleNavOpen = () => {
    setNavOpen(true);
    setClosing(false);
  }

  const handleCloseNav = () => {
    setClosing(true);
    setTimeout(() => {
      setNavOpen(false);
      setClosing(false);
    }, 500);
  };

  const handleClickAway = () => {
    if (navOpen) {
      handleCloseNav();
    }
  };

  const handleLinkClick = () => {
    if (navOpen) {
      handleCloseNav();
    }
  };
  return (
    <>
      <div className='navbar-bg'>
        <div className='container'>
          <header className='navbar-main'>
            <Link to='/' className='logo'>Code<span className='common-color'>With</span>Haseeb</Link>
            <nav className='navbar'>
              <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              <Link to='/technologies' className={location.pathname === '/technologies' ? 'active' : ''}>Technologies</Link>
              <Link to='/portfolio' className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
              <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact Me</Link>
            </nav>
            <a href={resume} download rel='noopener noreferrer'>
              <Button variant="contained" className='resume-btn' sx={{ textTransform: 'capitalize' }}>
                My Resume
              </Button>
            </a>
            <MenuIcon className='menu-icon' onClick={handleNavOpen} />
          </header>
        </div>
      </div>
      {navOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={`mobile-main ${closing ? 'slide-out' : 'slide-in'}`}>
            <div className='close-icon'>
              <CloseIcon onClick={handleCloseNav} />
            </div>
            <nav className='mobile-navbar'>
              <Link to='/' onClick={handleLinkClick}>Home</Link>
              <Link to='/about' onClick={handleLinkClick}>About</Link>
              <Link to='/technologies' onClick={handleLinkClick}>Technologies</Link>
              <Link to='/portfolio' onClick={handleLinkClick}>Portfolio</Link>
              <Link to='/contact' onClick={handleLinkClick}>Contact Me</Link>
            </nav>
            <div className='mobile-resume-btn'>
              <a href={resume} download rel='noopener noreferrer'>
                <Button variant="contained" className='resume-btn-1' sx={{ textTransform: 'capitalize' }}>
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </>
  );
}

export default Navbar;
