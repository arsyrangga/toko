import "./TambahReturn.css";
import React from "react";
import { Link } from "react-router-dom";

function TambahReturn() {
  return (
    <div className="tambah-barang">
      <h1>Return Barang </h1>
      <div className="form-data-barang">
        <p>ID</p>
        <input type="text" />
      </div>
      <div className="form-data-barang">
        <p>Tanggal</p>
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
        <Link to="/return">
          <button className="cancel">Cancel</button>
        </Link>
        <Link to="/return">
          <button className="submit">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default TambahReturn;
