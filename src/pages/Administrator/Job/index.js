import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroyJob, getJobs } from "../../../redux/action/job";
import { Link } from "react-router-dom";
import Gap from "../../../components/atoms/Gap";

const Job = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const { jobs } = useSelector((state) => state.jobs);

  const btnDelete = (id) => {
    destroyJob(id)
      .then((res) => {
        alert(res.message);
        dispatch(getJobs());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Gap height={10} />
      <div className="card">
        <div className="card-content">
          <Link to="/administrator/jobs/create" className="btn blue">
            <i className="material-icons">add</i>
          </Link>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((value, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>
                    <Link
                      to={`/administrator/jobs/${value.id}/update`}
                      className="btn orange"
                      style={{ marginRight: 5 }}
                    >
                      <i className="material-icons">edit</i>
                    </Link>
                    <button
                      className="btn red"
                      onClick={() => {
                        btnDelete(value.id);
                      }}
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Job;
