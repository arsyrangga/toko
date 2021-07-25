import "./TambahBarangMasuk.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Input } from "antd";

function TambahBarangMasuk() {
  const history = useHistory();
  const [tambahBarang, setTambahBarang] = useState({
    barang_id: "",
    tanggal: "",
    nama: "",
    kategori: "",
    merk: "",
    harga: 0,
    stock: 0,
  });
  useEffect(() => {
    fetch(
      `https://toko-barokah.herokuapp.com/api/data-barang/${tambahBarang.barang_id}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setTambahBarang({
          ...tambahBarang,
          nama: result.nama,
          kategori: result.kategori,
          merk: result.merk,
          harga: result.harga,
        });
      })
      .catch((err) => {});
  }, [tambahBarang.barang_id]);

  const HandleSubmit = () => {
    fetch("https://toko-barokah.herokuapp.com/api/data-masuk-post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          history.push("/barang-masuk");
        } else {
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("Masukkan data yang benar"));
  };
  return (
    <div className="tambah-barang">
      <h1>Tambah Barang Masuk</h1>
      <div className="form-data-barang">
        <p>ID Barang</p>
        <input
          type="number"
          onChange={(e) => {
            setTambahBarang({
              ...tambahBarang,
              barang_id: e.target.value,
            });
          }}
        />
      </div>
      <div className="form-data-barang">
        <p>Tanggal Masuk</p>
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
        <Link to="/barang-masuk">
          <button className="cancel">Cancel</button>
        </Link>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TambahBarangMasuk;
