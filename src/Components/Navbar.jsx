import React from 'react';

const Navbar = ({ setCategory }) => {
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="navbar-brand"><span className='badge bg-light text-dark'>Newsify</span></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("technology")}>Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("business")}>Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("health")}>Health</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("sports")}>Sports</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => handleCategoryClick("entertainment")}>Entertainment</div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
