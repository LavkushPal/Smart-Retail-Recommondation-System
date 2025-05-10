<nav className="navbar" ref={navbarRef}>
  <div className="container">
    {/* Navbar Logo */}
    <div className="navbar-cont">
      <img className="navbar-logo" src={logo} alt="SPIC MACAY Logo" />
    </div>

    {/* Navbar Links */}
    <div className={`nav-links ${isMobileMenuOpen ? "mobile" : ""}`}>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/events">
        Events
      </Link>
      <Link className="nav-link" to="/gallery">
        Gallery
      </Link>
      <Link className="nav-link" to="/activities">
        Activities
      </Link>
      <Link className="nav-link" to="/team">
        Team
      </Link>
    </div>

    {/* Mobile Menu Toggle Button */}
    <button className="menu-toggle" onClick={toggleMenu}>
      {isMobileMenuOpen ? "✖" : "☰"}
    </button>
  </div>
</nav>;
