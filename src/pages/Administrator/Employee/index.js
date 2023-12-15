import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../redux/action/employee";
import { Link } from "react-router-dom";
import Gap from "../../../components/atoms/Gap";

const Employee = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const { employees } = useSelector((state) => state.employees);

  return (
    <>
      <Gap height={10} />
      <Link to="/administrator/employees/create" className="btn blue">
        <i className="material-icons">add</i>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Nama</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.employeeId}</td>
              <td>{value.name}</td>
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
    </>
  );
};

export default Employee;
