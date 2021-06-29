import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import "./DataBarang.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const DataBarang = () => {
  return (
    <div className="data-barang">
      <Navbar />
      <Leftbar>
        <div className="row-data-barang">
          <h1>Data Barang</h1>{" "}
          <Link to="/tambah-barang">
            <button>
              <i className="fas fa-plus"></i>
              Tambah Barang
            </button>
          </Link>
        </div>
        <div className="row-data-barang2">
          <div className="data-left">
            <p>Tampikan</p>
            <select name="barang" id="barang">
              <option value="">1</option>
              <option value="">5</option>
              <option value="">10</option>
            </select>
            <p>Data</p>
          </div>
          <div className="data-right">
            <p>Cari</p>
            <input type="text" />
          </div>
        </div>
        <div className="table-data-barang-header">
          <p>No</p>
          <p>ID</p>
          <p>Nama Barang</p>
          <p>Kategori</p>
          <p>Harga</p>
          <p>Stock</p>
          <p>Action</p>
        </div>
        <div className="table-data-barang-isi">
          <p>1</p>
          <p>ID</p>
          <p>Yonex Arcsber 10</p>
          <p>Raket</p>
          <p>RP.300.000</p>
          <p>23</p>
          <p>
            <div className="edit-datas">
              <i className="fas fa-pen edit-data"></i>
            </div>
            <div className="edit-datas">
              <i className="fas fa-trash hapus-data"></i>
            </div>
          </p>
        </div>
        <Footer margin />
      </Leftbar>
    </div>
  );
};
export default DataBarang;