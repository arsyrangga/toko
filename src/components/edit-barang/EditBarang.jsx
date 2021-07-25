import "./EditBarang.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const EditBarang = ({ id, nama, kategori, merk, harga }) => {
  const history = useHistory();
  const [tambahBarang, setTambahBarang] = useState({
    id: id,
    nama: nama,
    kategori: kategori,
    merk: merk,
    harga: harga,
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
        if (result.status == 200) {
          window.location.reload();
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
        <p>ID</p>
        <input
          value={tambahBarang.id}
          type="number"
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              id: e.target.value,
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
        <p>Merk</p>
        <input
          value={tambahBarang.merk}
          type="text"
          onChange={(e) =>
            setTambahBarang({
              ...tambahBarang,
              merk: e.target.value,
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
          }}
        >
          Reset
        </button>
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
