import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import "./Beranda.css";

const Beranda = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(sessionStorage.getItem("user"));
  }, []);
  return (
    <div className="beranda">
      <Navbar />
      <Leftbar>
        <div className="beranda-notif">
          <i className="fas fa-user"></i>
          <div className="notif-text">
            <h3>Selamat Datang {user}</h3>
            <p>Di Sistem Informasi Persediaan Barang Toko Barokah Sport</p>
          </div>
        </div>
        <Link to="/stock-barang">
          <div className="beranda-card">
            <div className="beranda-card-left">
              <i className="fas fa-file"></i>
            </div>
            <div className="beranda-card-right">
              <i className="fas fa-plus"></i>
              <p>Stock Barang Yang Tersedia</p>
            </div>
          </div>
        </Link>
      </Leftbar>
    </div>
  );
};
export default Beranda;
