import Api from "../../../api/Api";

const storeDepartment = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/departments", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getDepartments = () => (dispatch) => {
  Api.get("/departments")
    .then((res) => {
      dispatch({
        type: "GET_DEPARTMENTS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getDepartment = (id) => (dispatch) => {
  Api.get(`/departments/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_DEPARTMENT",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const updateDepartment = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/departments/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyDepartment = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/departments/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export {
  getDepartments,
  storeDepartment,
  getDepartment,
  updateDepartment,
  destroyDepartment,
};
