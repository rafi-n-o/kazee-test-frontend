import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { convertToBase64 } from "../../../redux/action/convertToBase64";
import { useNavigate } from "react-router-dom";
import Gap from "../../../components/atoms/Gap";
import { getProfile, updateProfile } from "../../../redux/action/employee";
import M from "materialize-css";

const Profile = () => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  const { profile } = useSelector((state) => state.profile);

  const [previewPhoto, setPreviewPhoto] = useState();
  const [photo, setPhoto] = useState();
  const [employeeId = profile.employeeId, setEmployeeId] = useState();
  const [name = profile.name, setName] = useState();
  const [departmentId = profile.departmentId, setDepartmentId] = useState();
  const [jobId = profile.jobId, setJobId] = useState();
  const [email = profile.email, setEmail] = useState();
  const [phone = profile.phone, setPhone] = useState();
  const [address = profile.address, setAddress] = useState();
  const [joining = profile.joining, setJoining] = useState();
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

    updateProfile(form)
      .then((res) => {
        alert(res.message);
        window.location.reload();
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
      <form onSubmit={formEmployee} className="card">
        <div className="card-content">
          <div className="row">
            <div className="input-field col s12">
              <div className="center">
                {previewPhoto ? (
                  <img
                    src={previewPhoto}
                    class="responsive-img"
                    style={{ height: 150, width: 150, borderRadius: 100 }}
                  />
                ) : (
                  <img
                    src={`//${profile.photo}`}
                    class="responsive-img"
                    style={{ height: 150, width: 150, borderRadius: 100 }}
                  />
                )}
              </div>
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
                disabled
              />
              <label className="active">Nomor Pegawai</label>
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
              <label className="active">Nama</label>
              <span className="helper-text red-text">
                {validation?.map((value, index) =>
                  value.field === "name" ? value.message : null
                )}
              </span>
            </div>
            <div className="input-field col s12 m6">
              <select
                onChange={(e) => setDepartmentId(e.target.value)}
                disabled
              >
                <option value="" disabled selected>
                  Pilih Departemen
                </option>
              </select>
              <label className="active">Departemen</label>
              <span className="helper-text red-text">
                {validation?.map((value, index) =>
                  value.field === "departmentId" ? value.message : null
                )}
              </span>
            </div>
            <div className="input-field col s12 m6">
              <select onChange={(e) => setJobId(e.target.value)} disabled>
                <option value="" disabled selected>
                  Pilih Posisi
                </option>
              </select>
              <label className="active">Posisi</label>
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
              <label className="active">Email</label>
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
              <label className="active">No. Telepon</label>
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
              <label className="active">Alamat</label>
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
                disabled
              />
              <label className="active">Tanggal Bergabung</label>
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
              <label className="active">Password</label>
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
              <label className="active">Konfirmasi Password</label>
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
        </div>
      </form>
    </>
  );
};

export default Profile;
