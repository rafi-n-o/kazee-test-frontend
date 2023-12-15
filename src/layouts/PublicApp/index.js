import { Outlet } from "react-router-dom";
import Sidenav from "../../components/molecules/Public/Sidenav";

const PublicApp = () => {
  return (
    <>
      <Sidenav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default PublicApp;
