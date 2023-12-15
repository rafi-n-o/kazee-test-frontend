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
          <Link to="/administrator/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/administrator/departments">Departemen</Link>
        </li>
        <li>
          <Link to="/administrator/jobs">Posisi</Link>
        </li>
        <li>
          <Link to="/administrator/employees">Karyawan</Link>
        </li>
      </ul>

      <nav>
        <div class="nav-wrapper container">
          <a
            href="#"
            data-target="slide-out"
            class="sidenav-trigger show-on-medium-and-up"
          >
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
