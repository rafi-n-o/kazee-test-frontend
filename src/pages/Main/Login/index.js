import { useState } from "react";
import Gap from "../../../components/atoms/Gap";
import { useNavigate } from "react-router-dom";
import { storeLogin } from "../../../redux/action/employee";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const formLogin = (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    storeLogin(form)
      .then((res) => {
        localStorage.setItem("token", res.data);
        alert(res.message);
        navigate("/dashboard");
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
      <div className="row">
        <div className="col l3 m2 s0"></div>
        <div className="col l6 m8 s12">
          <form onSubmit={formLogin} className="card">
            <div className="card-content">
              <div className="center" style={{ fontSize: 22 }}>
                Silahkan Masuk
              </div>
              <div class="input-field">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
                <span class="helper-text red-text">
                  {validation?.map((value, index) =>
                    value.field === "email" ? value.message : null
                  )}
                </span>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
                <span class="helper-text red-text">
                  {validation?.map((value, index) =>
                    value.field === "password" ? value.message : null
                  )}
                </span>
              </div>
              <button class="btn btn-large" style={{ width: "100%" }}>
                Masuk
              </button>
            </div>
          </form>
        </div>
        <div className="col l3 m2 s0"></div>
      </div>
    </>
  );
};

export default Login;
