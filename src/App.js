import logo from "./logo.svg";
import "./css/main.css";
import Home from "./Pages/Home";
import Form from "./Components/Form";
import FormPage from "./Pages/FormPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
