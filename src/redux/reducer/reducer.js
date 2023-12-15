import { combineReducers } from "redux";
import { departments, department } from "./department";
import { jobs, job } from "./job";
import { employees, employee } from "./employee";

const reducer = combineReducers({
  departments,
  department,
  jobs,
  job,
  employees,
  employee,
});

export default reducer;
