import { useEffect, useState } from "react";
import { convertToBase64 } from "../../../../redux/action/convertToBase64";
import { useNavigate } from "react-router-dom";
import { storeEmployee } from "../../../../redux/action/employee";
import { getDepartments } from "../../../../redux/action/department";
import { getJobs } from "../../../../redux/action/job";
import { useDispatch, useSelector } from "react-redux";
import M from "materialize-css";
import Gap from "../../../../components/atoms/Gap";

const Create = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartments());
    dispatch(getJobs());
  }, [dispatch]);

  const { departments } = useSelector((state) => state.departments);
  const { jobs } = useSelector((state) => state.jobs);

  const [previewPhoto, setPreviewPhoto] = useState();
  const [photo, setPhoto] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [name, setName] = useState();
  const [departmentId, setDepartmentId] = useState();
  const [jobId, setJobId] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [joining, setJoining] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [validation, setValidation] = useState([]);

  const handlePreviewPhoto = (e) => {
    setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setPhoto(await convertToBase64(file));
  };

  const navigate = useNavigate();

  const formEmployee = (e) => {
    e.preventDefault();

    const form = {
      photo,
      employeeId,
      name,
      departmentId: parseInt(departmentId),
      jobId: parseInt(jobId),
      email,
      phone,
      address,
      joining,
      password,
      passwordConfirmation,
    };

    storeEmployee(form)
      .then((res) => {
        alert(res.message);
        navigate("/administrator/employees");
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
      <form onSubmit={formEmployee}>
        <div className="row">
          <div className="input-field col s12">
            <img src={previewPhoto} class="responsive-img" />
            <div class="file-field input-field">
              <div class="btn">
                <span>Foto</span>
                <input
                  type="file"
                  onChange={(e) => {
                    handlePreviewPhoto(e);
                    handleFileUpload(e);
                  }}
                />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" />
              </div>
            </div>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
            <label>Nomor Pegawai</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "name" ? value.message : null
              )}
            </span>
          </div>
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
          <div className="input-field col s12 m6">
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
            <label>Departemen</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "departmentId" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12 m6">
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
            <label>Posisi</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "jobId" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "email" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>No. Telepon</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "phone" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label>Alamat</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "address" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12">
            <input
              type="date"
              value={joining}
              onChange={(e) => setJoining(e.target.value)}
            />
            <label>Tanggal Bergabung</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "joining" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12 m6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "password" ? value.message : null
              )}
            </span>
          </div>
          <div className="input-field col s12 m6">
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <label>Konfirmasi Password</label>
            <span className="helper-text red-text">
              {validation?.map((value, index) =>
                value.field === "password_confirmation" ? value.message : null
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

export default Create;
