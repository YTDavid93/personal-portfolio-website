import './Header.css';

const Header = () => {
  return (
    <nav>
      <div className="nav-logo">DB</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      <div className="nav-status">
        <span className="status-dot"></span>
        Available for work
      </div>
    </nav>
  );
};

export default Header;
