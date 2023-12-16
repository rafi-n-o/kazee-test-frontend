import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../../redux/action/dashboard";
import DepartmentChart from "../../../components/molecules/Administrator/DepartmentChart";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboard("administrator"));
  }, [dispatch]);

  const { dashboard } = useSelector((state) => state.dashboard);

  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <div style={{ fontSize: 22 }}>Hello, Administrator</div>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="card">
            <div className="card-content">
              <div style={{ fontSize: 16, fontWeight: "bold" }}>
                Total Karyawan
              </div>
              <div style={{ fontSize: 18 }}>{dashboard.totalEmployee}</div>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="card">
            <div className="card-content">
              <div style={{ fontSize: 16, fontWeight: "bold" }}>
                Total Departemen
              </div>
              <div style={{ fontSize: 18 }}>{dashboard.totalDepartment}</div>
            </div>
          </div>
        </div>
        <div className="col s12">
          <DepartmentChart dashboard={dashboard} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
