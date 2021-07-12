import "./BarangMasuk.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
import EditMasuk from "../../components/edit-masuk/EditMasuk";

function BarangMasuk() {
  const onEdit = (key, e) => {
    e.preventDefault();
    const data = barang.filter((item) => item.id == key);
    setEdit({
      id: data[0].id,
      barang_id: data[0].barang_id,
      tanggal: data[0].tanggal,
      nama: data[0].nama,
      kategori: data[0].kategori,
      merk: data[0].merk,
      harga: data[0].harga,
      stock: data[0].stock,
    });
    console.log(edit);
    setModalEdit(!modalEdit);
  };
  const onDelete = (key, e) => {
    e.preventDefault();
    const data = barang.filter((item) => item.id == key);
    setEdit(data);
    fetch(`http://toko-barokah.herokuapp.com/api/data-masuk-delete/${key}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => (window.location.href = "/barang-masuk"));
  };
  const columns = [
    {
      title: "No",
      key: "no",
      render: (text, record, i) => <Space size="middle">{(i += 1)}</Space>,
    },
    {
      title: "ID Barang",
      dataIndex: "barang_id",
      key: "id",
    },
    {
      title: "Tanggal Masuk",
      dataIndex: "tanggal",
      key: "tanggal",
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
      title: "Harga",
      dataIndex: "harga",
      key: "harga",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <p
            onClick={(e) => {
              onEdit(record.id, e);
            }}
          >
            <div className="edit-datas" style={{ cursor: "pointer" }}>
              <i
                className="fas fa-pen edit-data"
                style={{ color: "white" }}
              ></i>
            </div>
          </p>
          <span
            className=""
            onClick={(e) => {
              onDelete(record.id, e);
            }}
          >
            <div
              className="edit-datas"
              style={{ background: "#d21212", cursor: "pointer" }}
            >
              <i
                className="fas fa-trash hapus-data"
                style={{ color: "white" }}
              ></i>
            </div>
          </span>
        </Space>
      ),
    },
  ];
  const [barang, setBarang] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    barang_id: "",
    tanggal: "",
    nama: "",
    kategori: "",
    merk: "",
    harga: 0,
    stock: 0,
  });
  const [modalEdit, setModalEdit] = useState(false);
  useEffect(() => {
    fetch("http://toko-barokah.herokuapp.com/api/data-masuk", {
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
    <div className="barang-masuk">
      <Navbar />
      <Leftbar>
        <div className="row-data-barang">
          <h1>Data Barang Masuk</h1>{" "}
          <Link to="/tambah-barang-masuk">
            <button>
              <i className="fas fa-plus"></i>
              Tambah Barang
            </button>
          </Link>
        </div>
        {modalEdit && (
          <EditMasuk
            id={edit.id}
            barang_id={edit.barang_id}
            tanggal={edit.tanggal}
            nama={edit.nama}
            kategori={edit.kategori}
            merk={edit.merk}
            harga={edit.harga}
            stock={edit.stock}
          />
        )}
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

export default BarangMasuk;
