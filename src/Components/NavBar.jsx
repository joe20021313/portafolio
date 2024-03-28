import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Joe from '../Pages/Joe.jsx';
function NavBar() {
  return (
<Router>
      <nav class="navbar navbar-light bg-purple" style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height: "5rem",
      }}>
        <div class="container-fluid">
          <Link to="/joe" class="navbar-brand">Joe</Link>
          <Link to="/abu" class="navbar-brand">Abu</Link>
          <Link to="/farid" class="navbar-brand">Farid</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/joe" element={<Joe/>} />
       
      </Routes>
    </Router>
  );
}

export default NavBar;
