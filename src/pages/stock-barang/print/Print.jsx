import "./Print.css";
import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import React from "react";

const getCurrentDate = (separator = "") => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
};

function Print() {
  const [stock, setStock] = useState(false);
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
      .then((y) => {
        window.print();
      })
      .catch((err) => console.log(err));
  }, []);
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
      {barang.map((e, i) => (
        <div className="table-stock-barang-isi">
          <p>{++i}</p>
          <p>{e.id}</p>
          <p>{e.nama}</p>
          <p>{e.kategori}</p>
          <p>{e.merk}</p>
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
            {e.datamasuks.length && e.datakeluars.length && e.datareturns.length
              ? e.datamasuks
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next) +
                e.datakeluars
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next) +
                e.datareturns
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : e.datamasuks.length && e.datakeluars.length
              ? e.datamasuks
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next) +
                e.datakeluars
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : e.datakeluars.length && e.datareturns.length
              ? e.datakeluars
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next) +
                e.datareturns
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : e.datamasuks.length && e.datareturns.length
              ? e.datamasuks
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next) +
                e.datareturns
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : e.datamasuks.length
              ? e.datamasuks
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : e.datakeluars.length
              ? e.datakeluars
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : e.datareturns.length
              ? e.datareturns
                  .map((e) => e.stock)
                  .reduce((prev, next) => prev + next)
              : 0}
          </p>
        </div>
      ))}

      <p className="tanggal">
        Depok,{" "}
        {new Date().getDate().toLocaleString().replace(".", "") +
          "-" +
          new Date().getMonth().toLocaleString().replace(".", "") +
          "-" +
          new Date().getFullYear().toLocaleString().replace(".", "")}
      </p>
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
