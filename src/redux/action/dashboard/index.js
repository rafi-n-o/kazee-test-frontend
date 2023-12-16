import Api from "../../../api/Api";

const getDashboard = (param) => (dispatch) => {
  Api.get(`/dashboards/${param}`)
    .then((res) => {
      dispatch({
        type: "GET_DASHBOARD",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getDashboard };
