import "./TambahBarangKeluar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Spin } from "antd";

function TambahBarangKeluar() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
        setLoading(false);
        setTambahBarang({
          ...tambahBarang,
          nama: result.nama,
          kategori: result.kategori,
          merk: result.merk,
          harga: result.harga,
        });
      })
      .catch((err) => {
        setLoading(false);
      });

    return () => {};
  }, [tambahBarang.barang_id]);
  const HandleSubmit = () => {
    setLoading(true);

    fetch("https://toko-barokah.herokuapp.com/api/data-keluar-post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          setLoading(false);

          history.push("/barang-keluar");
        } else {
          setLoading(false);

          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Masukkan data yang benar");
      });
  };
  return (
    <div className="tambah-barang">
      {loading && (
        <div className="loading-container">
          <Spin />
        </div>
      )}
      <h1>Tambah Barang Keluar</h1>
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
        <p>Tanggal Keluar</p>
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
        <button
          className="reset"
          onClick={() => {
            const input = document.getElementsByTagName("input");
            input[0].value = "";
            input[1].value = "";
            input[2].value = "";
          }}
        >
          Reset
        </button>
        <Link to="/barang-keluar">
          <button className="cancel">Cancel</button>
        </Link>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TambahBarangKeluar;
