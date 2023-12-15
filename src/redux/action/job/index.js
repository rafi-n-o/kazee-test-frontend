import Api from "../../../api/Api";

const storeJob = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/jobs", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getJobs = () => (dispatch) => {
  Api.get("/jobs")
    .then((res) => {
      dispatch({
        type: "GET_JOBS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getJob = (id) => (dispatch) => {
  Api.get(`/jobs/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_JOB",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateJob = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/jobs/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyJob = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/jobs/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { getJobs, getJob, storeJob, updateJob, destroyJob };
