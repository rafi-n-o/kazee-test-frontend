import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sidenav from "../../components/molecules/Main/Sidenav";
import { getProfile } from "../../redux/action/employee";

const MainApp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  getProfile()
    .then((res) => {
      dispatch({
        type: "GET_PROFILE",
        payload: res.data,
      });
    })
    .catch((err) => {
      alert(err.message === "jwt must be provided" ? "Silahkan Login" : null);
      navigate("/login");
    });

  return (
    <>
      <Sidenav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainApp;
