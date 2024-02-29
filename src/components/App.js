import Dashboard from "./Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/dashboard" replace={true} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/devices" element={<Dashboard />} />
        <Route path="/dashboard/tickets" element={<Dashboard />} />
        <Route
          path="/dashboard/tickets/activetickets"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
