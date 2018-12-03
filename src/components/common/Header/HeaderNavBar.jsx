import React from "react";

const HeaderNavBar = props => {
  let { showLogo } = props;

  //If showLogo is not defined, make it true by default

  showLogo = showLogo != undefined || showLogo != null ? showLogo : true;

  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container justify-content-between">
            <span className="navbar-brand" href="#">
              {showLogo ? "Stream.ly" : ""}
            </span>
            <div className="navbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default HeaderNavBar;
