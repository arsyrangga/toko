import "./TambahBarang.css";
import { Link } from "react-router-dom";

const TambahBarang = () => {
  return (
    <div className="tambah-barang">
      <h1>Data Barang</h1>
      <div className="form-data-barang">
        <p>ID</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Nama Barang</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Kategori</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Harga</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Stock</p>
        <input type="text" />
      </div>
      <div className="row-button">
        <button className="reset">Reset</button>
        <Link to="/data-barang">
          <button className="cancel">Cancel</button>
        </Link>
        <Link to="/data-barang">
          <button className="submit">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default TambahBarang;
