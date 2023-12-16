import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeJob } from "../../../../redux/action/job";
import Gap from "../../../../components/atoms/Gap";

const Create = () => {
  const [name, setName] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const formJob = (e) => {
    e.preventDefault();

    const form = {
      name,
    };

    storeJob(form)
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
      <div className="card">
        <div className="card-content">
          <form onSubmit={formJob}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Nama</label>
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

export default Create;
