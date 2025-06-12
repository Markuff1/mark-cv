import { Link } from "react-router-dom";
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
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/about">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
