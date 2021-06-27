import { useState } from "react";
import "./Leftbar.css";
import { Link } from "react-router-dom";

const Leftbar = ({ children }) => {
  const [bar, setBar] = useState({
    bar1: false,
    bar2: false,
    bar3: false,
  });
  return (
    <div className="leftbar">
      <div className="leftbar-left">
        <div className="left-bar-text-container">
          {" "}
          <Link to="/beranda">
            <div className="leftbar-text">
              <i className="fas fa-home"></i>
              <p>Beranda</p>
              <i className="fas fa-chevron-right"></i>
            </div>
          </Link>
        </div>
        <div className="left-bar-text-container">
          <div
            className="leftbar-text"
            onClick={() => setBar({ bar1: !bar.bar1 })}
          >
            <i className="fas fa-wallet"></i>
            <p>Data Master</p>
            <i
              className="fas fa-chevron-right"
              style={{
                transform: bar.bar1 ? "rotate(90deg)" : "rotate(0)",
                transitionDuration: "0.5s",
              }}
            ></i>
          </div>
          {bar.bar1 && (
            <div className=" leftbar-child">
              <Link to="/data-barang">
                <p>Data Barang</p>
              </Link>

              <Link to="/return">
                <p>Return</p>
              </Link>
            </div>
          )}
        </div>

        <div className="left-bar-text-container">
          <div
            className="leftbar-text"
            onClick={() => setBar({ bar2: !bar.bar2 })}
          >
            <i className="fas fa-clone"></i>
            <p>transaksi</p>
            <i
              className="fas fa-chevron-right"
              style={{
                transform: bar.bar2 ? "rotate(90deg)" : "rotate(0)",
                transitionDuration: "0.5s",
              }}
            ></i>
          </div>
          {bar.bar2 && (
            <div className=" leftbar-child">
              <Link to="/barang-masuk">
                <p>Barang Masuk</p>
              </Link>
              <Link to="/barang-keluar">
                <p>Barang Keluar</p>
              </Link>
            </div>
          )}
        </div>
        <div className="left-bar-text-container">
          <div
            className="leftbar-text"
            onClick={() => setBar({ bar3: !bar.bar3 })}
          >
            <i className="fas fa-file"></i>
            <p>Laporan</p>
            <i
              className="fas fa-chevron-right"
              style={{
                transform: bar.bar3 ? "rotate(90deg)" : "rotate(0)",
                transitionDuration: "0.5s",
              }}
            ></i>
          </div>
          {bar.bar3 && (
            <div className=" leftbar-child">
              <Link to="/stock-barang">
                <p>Stock Barang</p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="leftbar-right">{children}</div>
    </div>
  );
};

export default Leftbar;
