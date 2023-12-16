import { combineReducers } from "redux";
import { departments, department } from "./department";
import { jobs, job } from "./job";
import { employees, employee, profile } from "./employee";
import { dashboard } from "./dashboard";

const reducer = combineReducers({
  departments,
  department,
  jobs,
  job,
  employees,
  employee,
  profile,
  dashboard,
});

export default reducer;
