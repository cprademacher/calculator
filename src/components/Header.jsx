import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-dark-subtle">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Calculator
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/why">
                  Why
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/how">
                  How
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/calculator">
                      Calculator
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/resume">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
