import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  destroyDepartment,
  getDepartments,
} from "../../../redux/action/department";
import { Link } from "react-router-dom";
import Gap from "../../../components/atoms/Gap";

const Department = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const { departments } = useSelector((state) => state.departments);

  const btnDelete = (id) => {
    destroyDepartment(id)
      .then((res) => {
        alert(res.message);
        dispatch(getDepartments());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Gap height={10} />
      <Link to="/administrator/departments/create" className="btn blue">
        <i className="material-icons">add</i>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>
                <Link
                  to={`/administrator/departments/${value.id}/update`}
                  className="btn orange"
                  style={{ marginRight: 5 }}
                >
                  <i className="material-icons">edit</i>
                </Link>
                <button
                  className="btn red"
                  onClick={() => {
                    btnDelete(value.id);
                  }}
                >
                  <i className="material-icons">delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Department;
