import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Engine from "./pages/Engine";
import Sheet from "./pages/Sheet";
import Error from "./pages/Error";


const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/sheet" element={<Sheet />} />
        <Route path="*" element={<Error />} /> 
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
