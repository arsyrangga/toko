import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Spin } from "antd";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const HandleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://toko-barokah.herokuapp.com/api/data-login/${input.username}`,
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
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("user", input.username);
          setLoading(false);
          window.location.href = "/beranda";
        } else {
          alert("Password atau username salah");
          setLoading(false);
        }
      })
      .catch((err) => {
        alert("Password atau username salah");
        setLoading(false);
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
        <h1> Toko Ko Hasan</h1>
      </div>
      <div className="login-contener">
        <div className="login">
          <h3>Login Karyawan</h3>
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
            }}
          />
          <div className="checkbox-container">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <button onClick={HandleLogin}>Login</button>
        </div>
      </div>
      <Link to="/">
        <i className="fas fa-arrow-left back"></i>
      </Link>
    </div>
  );
};

export default Login;
