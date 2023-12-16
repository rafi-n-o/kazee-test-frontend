import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDepartment,
  updateDepartment,
} from "../../../../redux/action/department";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../../../../components/atoms/Gap";

const Update = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartment(id));
  }, [dispatch]);

  const { department } = useSelector((state) => state.department);

  const [name = department.name, setName] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const formDepartment = (e) => {
    e.preventDefault();

    const form = {
      name,
    };

    updateDepartment(id, form)
      .then((res) => {
        alert(res.message);
        navigate("/administrator/departments");
      })
      .catch((err) => {
        if (err.message === "validation failed") {
          setValidation(err.data);
        } else {
          alert(err.message);
        }
      });
  };
  return (
    <>
      <Gap height={10} />
      <div className="card">
        <div className="card-content">
          <form onSubmit={formDepartment}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="active">Nama</label>
                <span className="helper-text red-text">
                  {validation?.map((value, index) =>
                    value.field === "name" ? value.message : null
                  )}
                </span>
              </div>
              <div className="input-field col s12">
                <button className="btn">Simpan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
