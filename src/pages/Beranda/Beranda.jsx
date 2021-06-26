import Footer from "../../components/footer/Footer";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import "./Beranda.css";

const Beranda = () => {
  return (
    <div className="beranda">
      <Navbar />
      <Leftbar>
        <div className="beranda-notif">
          <i className="fas fa-user"></i>
          <div className="notif-text">
            <h3>Selamat Datang Langit</h3>
            <p>Di Sistem Informasi Persediaan Barang Toko Barokah Sport</p>
          </div>
        </div>
        <div className="beranda-card">
          <div className="beranda-card-left">
            <i className="fas fa-file"></i>
          </div>
          <div className="beranda-card-right">
            <i className="fas fa-plus"></i>
            <p>Jumlah Barang Yang Tersedia</p>
          </div>
        </div>
        <Footer margin />
      </Leftbar>
    </div>
  );
};
export default Beranda;
