import {Link} from "react-router-dom"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg sticky-top shadow-sm py-3" style={{ 
      backgroundColor: "rgba(255, 255, 255, 0.95)", 
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #eee" 
    }}>
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "150px" }} // Fixed width is usually better for logos than %
            alt="Logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links - Pushed to the right using ms-auto */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-dark-emphasis" to="/about">About</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-dark-emphasis" to="/product">Product</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-dark-emphasis" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-dark-emphasis" to="/support">Support</Link>
            </li>
            
            {/* CTA Button */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link className="btn btn-primary px-4 rounded-pill fw-bold shadow-sm" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
