import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../../../redux/action/employee";
import { useParams } from "react-router-dom";
import Gap from "../../../../components/atoms/Gap";
import moment from "moment";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee(id));
  }, [dispatch]);

  const { employee } = useSelector((state) => state.employee);

  return (
    <>
      <Gap height={10} />
      <div className="card">
        <div className="card-content">
          <div className="center">
            <img
              src={`//${employee.photo}`}
              class="responsive-img"
              style={{ height: 150, width: 150, borderRadius: 100 }}
            />
          </div>
          <Gap height={10} />
          <table>
            <tr>
              <td>ID</td>
              <td>{employee.employeeId}</td>
            </tr>
            <tr>
              <td>Nama Lengkap</td>
              <td>{employee.name}</td>
            </tr>
            <tr>
              <td>Departemen</td>
              <td>{employee.Department?.name}</td>
            </tr>
            <tr>
              <td>Posisi</td>
              <td>{employee.Job?.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{employee.email}</td>
            </tr>
            <tr>
              <td>No. Telepon</td>
              <td>{employee.phone}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>{employee.address}</td>
            </tr>
            <tr>
              <td>Tanggal Bergabung</td>
              <td>{moment(employee.joining).format("D-M-Y")}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Detail;
