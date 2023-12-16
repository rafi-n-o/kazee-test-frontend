import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const DepartmentChart = ({ dashboard }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Departemen Chart",
      },
    },
  };

  const labels = dashboard.departmentChart?.map((value) => value.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Karyawan",
        data: dashboard.departmentChart?.map((value) => value.total),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="card">
      <div className="card-content">
        <Bar options={options} data={data} />;
      </div>
    </div>
  );
};

export default DepartmentChart;
