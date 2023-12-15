import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJob, updateJob } from "../../../../redux/action/job";
import { useDispatch, useSelector } from "react-redux";
import Gap from "../../../../components/atoms/Gap";

const Update = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJob(id));
  }, [dispatch]);

  const { job } = useSelector((state) => state.job);

  const [name = job.name, setName] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const formJob = (e) => {
    e.preventDefault();

    const form = {
      name,
    };

    updateJob(id, form)
      .then((res) => {
        alert(res.message);
        navigate("/administrator/jobs");
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
      <form onSubmit={formJob}>
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
    </>
  );
};

export default Update;
