import "./StockBarang.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function StockBarang() {
  return (
    <div className="stock-barang">
      <Navbar />
      <Leftbar>
        <div className="row-data-barang">
          <h1>Laporan Stock Barang</h1>{" "}
          <Link to="/print">
            <button>
              <i className="fas fa-print"></i>
              Print
            </button>
          </Link>
        </div>
        <div className="table-stock-barang-header">
          <p>No</p>
          <p>ID</p>
          <p>Nama Barang</p>
          <p>Kategori</p>
          <p>Merk</p>
          <p>Stock</p>
        </div>
        <Isi no="1" />
        <Isi no="2" stock />
        <Isi no="3" />
        <div className="minimum">
          <div className="red">.</div>
          <p>Stock Barang Minimum</p>
        </div>
        <Footer margin />
      </Leftbar>
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

export default StockBarang;
