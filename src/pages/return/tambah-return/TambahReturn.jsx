import "./TambahReturn.css";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Input } from "antd";

function TambahReturn() {
  const history = useHistory();
  const [tambahBarang, setTambahBarang] = useState({
    code: "",
    tanggal: "",
    nama: "",
    kategori: "",
    merk: "",
    harga: 0,
    stock: 0,
  });
  const HandleSubmit = () => {
    fetch("https://toko-barokah.herokuapp.com/api/data-return-post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          history.push("/return");
        } else {
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("Masukkan data yang benar"));
  };
  return (
    <div className="tambah-barang">
      <h1>Return Barang </h1>
      <div className="form-data-barang">
        <p>ID</p>
        <input
          type="text"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              code: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Tanggal</p>
        <Input
          type="date"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              tanggal: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Nama Barang</p>
        <input
          type="text"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              nama: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Kategori</p>
        <input
          type="text"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              kategori: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Merk</p>
        <input
          type="text"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              merk: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Harga</p>
        <input
          type="number"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              harga: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Jumlah</p>
        <input
          type="number"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              stock: e.target.value,
            });
          }}
        />
      </div>
      <div className="row-button">
        <button className="reset">Reset</button>
        <Link to="/return">
          <button className="cancel">Cancel</button>
        </Link>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TambahReturn;
