import "./Dashboard.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="bg-dashboard"></div>
      <div className="dashboard-container">
        <Link to="/login">
          <div className="dashboard-card">
            <i className="fas fa-user-friends"></i>
            <h3> Login Karyawan</h3>
          </div>
        </Link>
        <Link to="/admin">
          <div className="dashboard-card">
            <i className="fas fa-users"></i>
            <h3>Login Admin</h3>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
