import "./TambahBarang.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const TambahBarang = () => {
  const history = useHistory();
  const [tambahBarang, setTambahBarang] = useState({
    code: "",
    nama: "",
    kategori: "",
    merk: "",
    harga: 0,
  });
  const HandleSubmit = () => {
    fetch("https://toko-barokah.herokuapp.com/api/data-barang-post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tambahBarang),
    })
      .then((result) => {
        if (result.status == 200) {
          history.push("/data-barang");
        } else {
          alert("Masukkan data yang benar");
        }
      })
      .catch((err) => alert("masukkan data yang benar"));

    return () => {};
  };
  return (
    <div className="tambah-barang">
      <h1>Data Barang</h1>

      <div className="form-data-barang">
        <p>Nama Barang</p>
        <input
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
        <button className="reset">Reset</button>
        <Link to="/data-barang">
          <button className="cancel">Cancel</button>
        </Link>
        <button className="submit" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TambahBarang;
