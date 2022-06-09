import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex">
    <h1 className="nav-title">Bookstore CMS</h1>
    <div className="nav-links">
      <Link to="/" className="nav-link">
        BOOKS
      </Link>
      <Link to="/categories" className="nav-link">
        CATEGORIES
      </Link>
    </div>
  </nav>
);

export default Navigation;
