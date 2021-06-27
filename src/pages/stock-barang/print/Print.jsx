import "./Print.css";

import React from "react";

function Print() {
  return (
    <div className="print">
      <h1>laporan Stock Barang Toko Barokah Sport</h1>
      <div className="table-stock-barang-header">
        <p>No</p>
        <p>ID</p>
        <p>Nama Barang</p>
        <p>Kategori</p>
        <p>Merk</p>
        <p>Stock</p>
      </div>
      <Isi no="1" />
      <Isi no="2" />
      <Isi no="3" />
      <p className="tanggal">Depok, 15 juni 2021</p>
    </div>
  );
}
const Isi = ({ no, stock }) => {
  return (
    <div className="table-stock-barang-isi">
      <p>{no}</p>
      <p>0987</p>
      <p>Yonex Arcsber 10</p>
      <p>Raket</p>
      <p>Yonex</p>
      <p
        style={{
          backgroundColor: stock ? "red" : "inherit",
          color: stock ? "white" : "black",
          padding: stock ? "5px 5px" : 0,
          width: stock ? "50px" : "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        23
      </p>
    </div>
  );
};

export default Print;
