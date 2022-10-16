import {Link} from 'react-router-dom';

function Head(props) {
  return (
    
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
        <i class="bi bi-list me-3"></i>
          {props.name}
          </Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <Link to="/pricing" className='navbar-link text-white'>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className='navbar-link text-white'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
export default Head;