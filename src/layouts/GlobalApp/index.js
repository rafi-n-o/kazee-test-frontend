import { Outlet } from "react-router-dom";

const GlobalApp = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default GlobalApp;
