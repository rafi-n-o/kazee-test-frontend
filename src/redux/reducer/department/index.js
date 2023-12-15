const stateDepartments = {
  departments: [],
};

const stateDepartment = {
  department: [],
};

const departments = (state = stateDepartments, action) => {
  if (action.type === "GET_DEPARTMENTS") {
    return {
      ...state,
      departments: action.payload,
    };
  }

  return state;
};

const department = (state = stateDepartment, action) => {
  if (action.type === "GET_DEPARTMENT") {
    return {
      ...state,
      department: action.payload,
    };
  }

  return state;
};

export { departments, department };
