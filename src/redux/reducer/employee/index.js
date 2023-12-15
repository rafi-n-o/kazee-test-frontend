const stateEmployees = {
  employees: [],
};

const stateEmployee = {
  employee: [],
};

const employees = (state = stateEmployees, action) => {
  if (action.type === "GET_EMPLOYEES") {
    return {
      ...state,
      employees: action.payload,
    };
  }

  return state;
};

const employee = (state = stateEmployee, action) => {
  if (action.type === "GET_EMPLOYEE") {
    return {
      ...state,
      employee: action.payload,
    };
  }

  return state;
};

export { employees, employee };
