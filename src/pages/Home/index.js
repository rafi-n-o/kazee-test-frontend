import { Link } from "react-router-dom";
import Gap from "../../components/atoms/Gap";

const Home = () => {
  return (
    <>
      <Gap height={10} />
      <Link to="/login">
        <div className="card">
          <div className="card-content" style={{ fontSize: 20 }}>
            Public
          </div>
        </div>
      </Link>
      <Gap height={10} />
      <Link to="/administrator/dashboard">
        <div className="card">
          <div className="card-content" style={{ fontSize: 20 }}>
            Administrator
          </div>
        </div>
      </Link>
    </>
  );
};

export default Home;
