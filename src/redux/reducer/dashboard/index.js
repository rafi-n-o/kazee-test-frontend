const stateDashboard = {
  dashboard: [],
};

const dashboard = (state = stateDashboard, action) => {
  if (action.type === "GET_DASHBOARD") {
    return {
      ...state,
      dashboard: action.payload,
    };
  }

  return state;
};

export { dashboard };
