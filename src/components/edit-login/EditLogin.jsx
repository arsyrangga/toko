import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

function EditLogin({ username, password, nama, status, id }) {
  const [tambahBarang, setTambahBarang] = useState({
    username: username,
    password: password,
    nama: nama,
    status: status,
  });
  const HandleSubmit = () => {
    fetch(`https://toko-barokah.herokuapp.com/api/data-login-edit/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          window.location.href = "/user";
        } else {
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("masukkan data yang benar"));
  };
  return (
    <div className="edit-barang">
      <h1>Data Barang</h1>
      <div className="form-data-barang">
        <p>Username</p>
        <input
          value={tambahBarang.username}
          type="text"
          onChange={(e) =>
            setTambahBarang({ ...tambahBarang, username: e.target.value })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Nama Lengkap</p>
        <input
          value={tambahBarang.nama}
          type="text"
          onChange={(e) =>
            setTambahBarang({ ...tambahBarang, nama: e.target.value })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Password</p>
        <input
          value={tambahBarang.password}
          type="password"
          onChange={(e) =>
            setTambahBarang({ ...tambahBarang, password: e.target.value })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Status</p>
        <Select
          defaultValue={tambahBarang.status}
          style={{ width: "75%" }}
          onChange={(e) => {
            setTambahBarang({ ...tambahBarang, status: e });
          }}
        >
          <Option value="Aktif">Aktif</Option>
          <Option value="Tidak Aktif">Tidak Aktif</Option>
        </Select>
      </div>

      <div className="row-button">
        <button className="reset">Reset</button>
        <button
          className="cancel"
          onClick={() => (window.location.href = "/user")}
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

export default EditLogin;
