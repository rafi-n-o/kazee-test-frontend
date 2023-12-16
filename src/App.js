import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdministratorApp from "./layouts/AdministratorApp";
import GlobalApp from "./layouts/GlobalApp";
import MainApp from "./layouts/MainApp";
import AdministratorDashboard from "./pages/Administrator/Dashboard";
import AdministratorDepartment from "./pages/Administrator/Department";
import AdministratorDepartmentCreate from "./pages/Administrator/Department/Create";
import AdministratorDepartmentUpdate from "./pages/Administrator/Department/Update";
import AdministratorEmployee from "./pages/Administrator/Employee";
import AdministratorEmployeeCreate from "./pages/Administrator/Employee/Create";
import AdministratorEmployeeDetail from "./pages/Administrator/Employee/Detail";
import AdministratorJob from "./pages/Administrator/Job";
import AdministratorJobCreate from "./pages/Administrator/Job/Create";
import AdministratorJobUpdate from "./pages/Administrator/Job/Update";
import Home from "./pages/Home";
import Login from "./pages/Main/Login";
import store from "./redux/store";
import Dashboard from "./pages/Main/Dashboard";
import Profile from "./pages/Main/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<GlobalApp />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="" element={<MainApp />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="" element={<AdministratorApp />}>
            <Route
              path="/administrator/dashboard"
              element={<AdministratorDashboard />}
            />
            <Route path="/administrator/departments">
              <Route index element={<AdministratorDepartment />} />
              <Route
                path="create"
                element={<AdministratorDepartmentCreate />}
              />
              <Route
                path=":id/update"
                element={<AdministratorDepartmentUpdate />}
              />
            </Route>
            <Route path="/administrator/jobs">
              <Route index element={<AdministratorJob />} />
              <Route path="create" element={<AdministratorJobCreate />} />
              <Route path=":id/update" element={<AdministratorJobUpdate />} />
            </Route>
            <Route path="/administrator/employees">
              <Route index element={<AdministratorEmployee />} />
              <Route path="create" element={<AdministratorEmployeeCreate />} />
              <Route path=":id" element={<AdministratorEmployeeDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
