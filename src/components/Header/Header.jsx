import React, { useState } from 'react';
import './Header.css';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [navOpen, setNavOpen] = useState(false); // Manage nav visibility on mobile
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  const handleMenuToggle = () => {
    setNavOpen(!navOpen); // Toggle navigation menu visibility
  };

  return (
    <header>
      <Container>
        <nav>
          {/* Logo and title */}
          <div className="logo-container">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Menu button for mobile */}
          <button className="menu-btn" onClick={handleMenuToggle}>
            &#9776; {/* Hamburger icon */}
          </button>

          {/* Navigation items */}
          <ul className={navOpen ? 'show' : ''}>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setNavOpen(false); // Close menu after navigation
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;