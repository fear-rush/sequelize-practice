import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home Page</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
