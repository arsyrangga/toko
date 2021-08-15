import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

function TambahPengguna() {
  const history = useHistory();
  const [tambahBarang, setTambahBarang] = useState({
    username: "",
    password: "",
    nama: "",
    status: "aktif",
  });
  const HandleSubmit = () => {
    fetch("https://toko-barokah.herokuapp.com/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          history.push("/user");
        } else {
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("Masukkan data yang benar"));

    return () => {};
  };
  return (
    <div className="tambah-barang">
      <h1>Tambah User </h1>
      <div className="form-data-barang">
        <p>Username</p>
        <input
          type="text"
          onChange={(e) =>
            setTambahBarang({ ...tambahBarang, username: e.target.value })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Nama Lengkap</p>
        <input
          type="text"
          onChange={(e) =>
            setTambahBarang({ ...tambahBarang, nama: e.target.value })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Password</p>
        <input
          type="password"
          onChange={(e) =>
            setTambahBarang({ ...tambahBarang, password: e.target.value })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Status</p>
        <Select
          defaultValue="Aktif"
          style={{ width: "75%" }}
          onChange={(e) => {
            setTambahBarang({ ...tambahBarang, status: e });
          }}
        >
          <Option value="Aktif">Aktif</Option>
          <Option value="Tidak Aktif">Tidak Aktif</Option>
        </Select>
      </div>

      <div
        className="row-button"
        onClick={() => {
          const input = document.getElementsByTagName("input");
          input[0].value = "";
          input[1].value = "";
          input[2].value = "";
          input[3].value = "";
        }}
      >
        <button className="reset">Reset</button>
        <Link to="/user">
          <button className="cancel">Cancel</button>
        </Link>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TambahPengguna;
