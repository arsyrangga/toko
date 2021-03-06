import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

function EditKeluar({
  id,
  barang_id,
  tanggal,
  nama,
  kategori,
  merk,
  harga,
  stock,
}) {
  const [tambahBarang, setTambahBarang] = useState({
    barang_id: barang_id,
    tanggal: tanggal,
    nama: nama,
    kategori: kategori,
    merk: merk,
    harga: harga,
    stock: stock,
  });
  const HandleSubmit = () => {
    fetch(`https://toko-barokah.herokuapp.com/api/data-keluar-edit/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          window.location.href = "/barang-keluar";
        } else {
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("masukkan data yang benar"));
  };
  return (
    <div className="edit-barang">
      <h1>Edit Barang Keluar</h1>
      <div className="form-data-barang">
        <p>ID Barang</p>
        <input
          value={tambahBarang.barang_id}
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
          value={tambahBarang.tanggal}
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
          value={tambahBarang.nama}
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
          value={tambahBarang.kategori}
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
          value={tambahBarang.merk}
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
          value={tambahBarang.harga}
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
          value={tambahBarang.stock}
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
            input[3].value = "";
            input[4].value = "";
            input[5].value = "";
            input[6].value = "";
          }}
        >
          Reset
        </button>
        <button
          className="cancel"
          onClick={() => (window.location.href = "/barang-keluar")}
        >
          Cancel
        </button>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditKeluar;
