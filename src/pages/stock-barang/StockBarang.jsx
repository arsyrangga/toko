import "./StockBarang.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";

function StockBarang() {
  const columns = [
    {
      title: "No",
      key: "no",
      render: (text, record, i) => <Space size="middle">{(i += 1)}</Space>,
    },
    {
      title: "ID Barang",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Nama lengkap",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
    },
    {
      title: "Merk",
      dataIndex: "merk",
      key: "merk",
    },
    {
      title: "Stock",
      key: "stock",
      render: (text, record, i) => (
        <Space size="middle">
          {text.datamasuks.length &&
          text.datakeluars.length &&
          text.datareturns.length
            ? text.datamasuks
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next) +
              text.datakeluars
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next) +
              text.datareturns
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datamasuks.length && text.datakeluars.length
            ? text.datamasuks
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next) +
              text.datakeluars
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datakeluars.length && text.datareturns.length
            ? text.datakeluars
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next) +
              text.datareturns
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datamasuks.length && text.datareturns.length
            ? text.datamasuks
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next) +
              text.datareturns
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datamasuks.length
            ? text.datamasuks
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datakeluars.length
            ? text.datakeluars
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datareturns.length
            ? text.datareturns
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : 0}
        </Space>
      ),
    },
  ];

  function stock(item) {
    return item.Amount;
  }

  const [barang, setBarang] = useState([]);
  const [datax, setDatax] = useState([]);
  useEffect(() => {
    fetch("http://toko-barokah.herokuapp.com/api/data-barang", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setBarang(data);
      })
      .catch((err) => console.log(err));
  }, []);
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
        <Table
          bordered
          columns={columns}
          dataSource={barang}
          style={{ marginBottom: "10px", marginTop: "25px" }}
        />
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
