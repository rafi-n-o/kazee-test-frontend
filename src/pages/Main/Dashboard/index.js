import { useSelector } from "react-redux";

const Dashboard = () => {
  const { profile } = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <div className="card">
      <div className="card-content">
        <div style={{ fontSize: 22 }}>Hello, {profile?.name}</div>
        <div style={{ fontSize: 16 }}>{profile?.employeeId}</div>
      </div>
    </div>
  );
};

export default Dashboard;
