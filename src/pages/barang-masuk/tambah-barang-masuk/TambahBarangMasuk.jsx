import "./TambahBarangMasuk.css";
import React from "react";
import { Link } from "react-router-dom";

function TambahBarangMasuk() {
  return (
    <div className="tambah-barang">
      <h1>Data Barang Masuk </h1>
      <div className="form-data-barang">
        <p>ID</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Tanggal Masuk</p>
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
        <p>Merk</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Harga</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Jumlah</p>
        <input type="text" />
      </div>
      <div className="row-button">
        <button className="reset">Reset</button>
        <Link to="/barang-masuk">
          <button className="cancel">Cancel</button>
        </Link>
        <Link to="/barang-masuk">
          <button className="submit">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default TambahBarangMasuk;
