import "./EditBarang.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const EditBarang = ({ id, code, nama, kategori, harga, stock }) => {
  const [tambahBarang, setTambahBarang] = useState({
    code: code,
    nama: nama,
    kategori: kategori,
    harga: harga,
    stock: stock,
  });
  const HandleSubmit = () => {
    fetch(`https://toko-barokah.herokuapp.com/api/data-barang-edit/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        window.location.href = "/data-barang";
      })
      .catch((err) => alert("masukkan data yang benar"));
  };
  return (
    <div className="edit-barang">
      <h1>Data Barang</h1>
      <div className="form-data-barang">
        <p>ID</p>
        <input
          value={tambahBarang.code}
          type="text"
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              code: e.target.value,
            })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Nama Barang</p>
        <input
          value={tambahBarang.nama}
          type="text"
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              nama: e.target.value,
            })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Kategori</p>
        <input
          value={tambahBarang.kategori}
          type="text"
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              kategori: e.target.value,
            })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Harga</p>
        <input
          value={tambahBarang.harga}
          type="number"
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              harga: e.target.value,
            })
          }
        />
      </div>
      <div className="form-data-barang">
        <p>Stock</p>
        <input
          type="number"
          value={tambahBarang.stock}
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              stock: e.target.value,
            })
          }
        />
      </div>
      <div className="row-button">
        <button className="reset">Reset</button>
        <button
          className="cancel"
          onClick={() => (window.location.href = "/data-barang")}
        >
          Cancel
        </button>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditBarang;
