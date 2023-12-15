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
      <form onSubmit={formLogin}>
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
        <button class="btn">Masuk</button>
      </form>
    </>
  );
};

export default Login;
