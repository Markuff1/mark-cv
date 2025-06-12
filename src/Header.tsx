import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Mark Nixon</h1>
        <h2>___________________</h2>
        <h3>Software Developer and Tester</h3>
      </div>

      <nav className="header-right">
        <ul className="nav-list">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
