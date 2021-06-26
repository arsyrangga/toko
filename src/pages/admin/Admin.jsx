import "./Admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="dashboard">
      <div className="bg-dashboard">
        <h1> Barokah Sport</h1>
      </div>
      <div className="login-contener">
        <div className="login">
          <h3>Login Admin</h3>
          <p className="text-input">Username </p>
          <input
            type="text"
            className="login-input"
            placeholder="Masukan Username Anda"
          />
          <p className="text-input">Password</p>
          <input
            type="password"
            className="login-input"
            placeholder="Masukan Password Anda"
          />
          <div className="checkbox-container">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>

          <button>Login</button>
        </div>
      </div>
      <Link to="/">
        <i className="fas fa-arrow-left back"></i>
      </Link>
    </div>
  );
};
export default Admin;
