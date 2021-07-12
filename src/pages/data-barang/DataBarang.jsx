import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import "./DataBarang.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EditBarang from "../../components/edit-barang/EditBarang";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";

const DataBarang = () => {
  const onEdit = (key, e) => {
    e.preventDefault();
    const data = barang.filter((item) => item.id == key);
    setEdit({
      id: data[0].id,
      nama: data[0].nama,
      kategori: data[0].kategori,
      merk: data[0].merk,
      harga: data[0].harga,
    });
    console.log(edit);
    setModalEdit(!modalEdit);
  };
  const onDelete = (key, e) => {
    e.preventDefault();
    const data = barang.filter((item) => item.id == key);
    setEdit(data);
    fetch(`http://toko-barokah.herokuapp.com/api/data-barang-delete/${key}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => (window.location.href = "/data-barang"));
  };
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
      title: "Nama Barang",
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

  const [no, setNo] = useState(1);
  const [barang, setBarang] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    nama: "",
    kategori: "",
    merk: "",
    harga: 0,
  });
  const [modalEdit, setModalEdit] = useState(false);
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
    <div className="data-barang">
      <Navbar />
      <Leftbar>
        <div className="row-data-barang">
          <h1>Data Barang</h1>{" "}
          <Link to="/tambah-barang">
            <button>
              <i className="fas fa-plus"></i>
              Tambah Barang
            </button>
          </Link>
        </div>

        {modalEdit && (
          <EditBarang
            id={edit.id}
            nama={edit.nama}
            kategori={edit.kategori}
            merk={edit.merk}
            harga={edit.harga}
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
};
export default DataBarang;
