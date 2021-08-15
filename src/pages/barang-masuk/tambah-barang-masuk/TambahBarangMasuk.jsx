import "./TambahBarangMasuk.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Input, Spin } from "antd";

function TambahBarangMasuk() {
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
    fetch(`https://toko-barokah.herokuapp.com/api/data-barang`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setTambahBarang({
          ...tambahBarang,
          nama: result[tambahBarang.barang_id - 1].nama,
          kategori: result[tambahBarang.barang_id - 1].kategori,
          merk: result[tambahBarang.barang_id - 1].merk,
          harga: result[tambahBarang.barang_id - 1].harga,
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });

    return () => {};
  }, [tambahBarang.barang_id]);

  const HandleSubmit = () => {
    setLoading(true);
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
          setLoading(false);
          history.push("/barang-masuk");
        } else {
          setLoading(false);
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("Masukkan data yang benar"));
  };
  return (
    <div className="tambah-barang">
      {loading && (
        <div className="loading-container">
          <Spin />
        </div>
      )}
      <h1>Tambah Barang Masuk</h1>
      <div className="form-data-barang">
        <p>ID Barang</p>
        <input
          id="id"
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
          id="date"
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
          id="jumlah"
          type="number"
          onChange={(e) => {
            console.log(tambahBarang);
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
            document.getElementById("id").value = "";
            document.getElementById("date").value = "";
            document.getElementById("jumlah").value = "";
          }}
        >
          Reset
        </button>
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
