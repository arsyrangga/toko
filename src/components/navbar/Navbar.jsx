import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [logout, setLogout] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, []);
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <h2> Dashboard</h2>
        </div>
        <div className="nav-right">
          <img
            src="https://picsum.photos/seed/400/900"
            alt=""
            onClick={() => setLogout(!logout)}
          />
          <p onClick={() => setLogout(!logout)} style={{ cursor: "pointer" }}>
            {user}
          </p>
        </div>
      </div>
      {logout && (
        <Link to="/">
          <div className="logout">
            <h3>Logout</h3>
          </div>
        </Link>
      )}
    </>
  );
};
export default Navbar;
