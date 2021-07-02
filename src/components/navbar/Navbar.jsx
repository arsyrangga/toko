import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
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
        <div
          className="logout"
          onClick={() => {
            sessionStorage.clear();
            history.push("/");
          }}
        >
          <h3>Logout</h3>
        </div>
      )}
    </>
  );
};
export default Navbar;
