import '../assets/style/App.scss';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', href: '/' },
  { id: 'exchange', label: 'TRADE', href: '/items' },
  { id: 'community', label: 'POSTS', href: '/post' },
  { id: 'items', label: 'MINE', href: '/mine' },
];

type NavItem = {
  id: string;
  href: string;
  label: string;
};

function NavBar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}>
          <span className="logo-icon">💧</span>
          <span className="logo-text">Water Water ex</span>
        </div>
        <nav>
          <ul className="nav-menu">
            {navItems.map((item: NavItem) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  style={{ color: '#667eea', fontSize: '16px', fontWeight: '500'}}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          className="cta-button"
          onClick={() => navigate('/items')}
        >
          로그인
        </button>
      </div>
    </header>
  );
}

export default NavBar; 