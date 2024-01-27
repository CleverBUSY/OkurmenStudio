import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import Logo from '../../assets/media/Logo.png';
import '../../assets/style/Header.scss';
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
      if (currentScrollPos > prevScrollPos) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header className={`header ${isVisible ? 'visible' : 'hidden'}`} id="header">
        <div className="container">
          <div className="header-wrapper">
            <Link to="/">
              <div className="header-logo">
                <img className="images-logo" src={Logo} alt="" />
              </div>
            </Link>

            <div className="navbar">
              <div className='block-list'>
                <ul onClick={handleScrollToTop} className="df">
                  <Link className="active" to="/">
                    Главный
                  </Link>
                  <Link to="/comands">Команда</Link>
                  <Link to="/Projects">Проекты</Link>
                  <Link to="/contact">Контакт</Link>
                </ul>
              </div>
              <div>
                <button className={`burger ${menuOpen ? 'active' : ''}`} id="toggleMenu" onClick={toggleMenu}>
                  {menuOpen ? <AiOutlineClose /> : <AiOutlineBars />} {/* Conditional rendering of icons */}
                </button>
                <nav id="menu" className={menuOpen ? 'show-menu' : ''}>
                  <ul style={{border: "1px solid #1b426f"}} onClick={handleScrollToTop} className={menuOpen ? 'menu-show' : 'menu-hidden'}>
                    <li><Link to="/">Главный</Link></li>
                    <li><Link to="/comands">Команда</Link></li>
                    <li><Link to="/contact">Контакт</Link></li>
                    <li><Link to="/projects">Проекты</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
