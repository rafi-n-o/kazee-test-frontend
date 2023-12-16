import M from "materialize-css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  useEffect(() => {
    var elemsSidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elemsSidenav, {});
    var elemsCollapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elemsCollapsible, {});
  }, []);

  return (
    <>
      <ul id="slide-out" class="sidenav">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>

      <div class="navbar-fixed">
        <nav>
          <div class="nav-wrapper container">
            <a
              href="#"
              data-target="slide-out"
              class="sidenav-trigger show-on-medium-and-up"
            >
              <i class="material-icons">menu</i>
            </a>
            <Link to="/" className="right">
              <i className="material-icons">home</i>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
