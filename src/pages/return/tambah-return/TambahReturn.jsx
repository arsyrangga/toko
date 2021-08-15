import "./TambahReturn.css";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "antd";

function TambahReturn() {
  const history = useHistory();
  const [tambahBarang, setTambahBarang] = useState({
    barang_id: 0,
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

    return () => {};
  };
  return (
    <div className="tambah-barang">
      <h1>Return Barang </h1>
      <div className="form-data-barang">
        <p>ID_Barang</p>
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
        <p>Tanggal</p>
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
