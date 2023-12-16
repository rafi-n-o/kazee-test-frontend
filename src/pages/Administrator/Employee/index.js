import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../redux/action/employee";
import { getDepartments } from "../../../redux/action/department";
import { getJobs } from "../../../redux/action/job";
import { Link } from "react-router-dom";
import Gap from "../../../components/atoms/Gap";
import M from "materialize-css";

const Employee = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getDepartments());
    dispatch(getJobs());
  }, [dispatch]);

  const { employees } = useSelector((state) => state.employees);
  const { departments } = useSelector((state) => state.departments);
  const { jobs } = useSelector((state) => state.jobs);

  const [departmentId, setDepartmentId] = useState();
  const [jobId, setJobId] = useState();

  return (
    <>
      <Gap height={10} />
      <div className="card">
        <div className="card-content">
          <div>
            <Link to="/administrator/employees/create" className="btn blue">
              <i className="material-icons">add</i>
            </Link>
          </div>
          <Gap height={5} />
          <div className="left">
            <select onChange={(e) => setDepartmentId(e.target.value)}>
              <option value="" disabled selected>
                Pilih Departemen
              </option>
              {departments.map((value, index) => (
                <option value={value.id} key={index}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="left" style={{ marginRight: 5 }}>
            <select onChange={(e) => setJobId(e.target.value)}>
              <option value="" disabled selected>
                Pilih Posisi
              </option>
              {jobs.map((value, index) => (
                <option value={value.id} key={index}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="left">
            <button
              className="btn"
              onClick={() => dispatch(getEmployees(departmentId, jobId))}
            >
              <i className="material-icons">search</i>
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Nama</th>
                <th>Departemen</th>
                <th>Posisi</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.employeeId}</td>
                  <td>{value.name}</td>
                  <td>{value.Department?.name}</td>
                  <td>{value.Job?.name}</td>
                  <td>
                    <Link
                      to={`/administrator/employees/${value.id}`}
                      className="btn"
                    >
                      <i className="material-icons">remove_red_eye</i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee;
