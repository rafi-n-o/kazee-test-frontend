import Api from "../../../api/Api";

const storeEmployee = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/employees", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getEmployees = () => (dispatch) => {
  Api.get("/employees")
    .then((res) => {
      dispatch({
        type: "GET_EMPLOYEES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getEmployee = (id) => (dispatch) => {
  Api.get(`/employees/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_EMPLOYEE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const storeLogin = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/employees/login", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { getEmployees, storeEmployee, getEmployee, storeLogin };
