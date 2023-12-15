import { Outlet } from "react-router-dom";
import Sidenav from "../../components/molecules/Administrator/Sidenav";

const AdministratorApp = () => {
  return (
    <>
      <Sidenav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default AdministratorApp;
