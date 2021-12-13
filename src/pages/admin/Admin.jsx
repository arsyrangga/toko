import "./Admin.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const HandleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://toko-barokah.herokuapp.com/api/data-login-admin/${input.username}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((result) => result.json())
      .then((data) => {
        if (
          data.username == input.username &&
          data.password == input.password
        ) {
          alert(`selamat datang ${input.username}`);
          sessionStorage.setItem("isAdmin", true);
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("user", input.username);
          setLoading(false);
          window.location.href = "/beranda";
        } else {
          setLoading(false);
          alert("Password atau username salah");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Password atau username salah");
      });
  };
  return (
    <div className="dashboard">
      {loading && (
        <div className="loading-container">
          <Spin />
        </div>
      )}
      <div className="bg-dashboard">
        <h1>Toko Ko Hasan</h1>
      </div>
      <div className="login-contener">
        <div className="login">
          <h3>Login Admin</h3>
          <p className="text-input">Username </p>
          <input
            type="text"
            className="login-input"
            placeholder="Masukan Username Anda"
            onChange={(e) => {
              setInput({
                ...input,
                username: e.target.value,
              });
              console.log(input);
            }}
          />
          <p className="text-input">Password</p>
          <input
            type="password"
            className="login-input"
            placeholder="Masukan Password Anda"
            onChange={(e) => {
              setInput({
                ...input,
                password: e.target.value,
              });
              console.log(input);
            }}
          />
          <div className="checkbox-container">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <button id="button" onClick={HandleLogin}>
            Login
          </button>
        </div>
      </div>
      <Link to="/">
        <i className="fas fa-arrow-left back"></i>
      </Link>
    </div>
  );
};
export default Admin;
