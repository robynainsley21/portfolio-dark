import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid p-3">
          <Link class="navbar-brand" to="/">
            <img
              src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <Link class="navbar-brand" to="/">
                <img
                  src="https://robynainsley21.github.io/images/images/Portfolio logo (1).png"
                  alt="logo"
                  loading="lazy"
                />
              </Link>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav fw-bolder ms-auto">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/resume">
                    Education & Experience
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/projects">
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" to="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
