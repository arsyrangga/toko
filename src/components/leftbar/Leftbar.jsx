import { useState } from "react";
import "./Leftbar.css";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
  CalendarOutlined,
  ContainerOutlined,
  ContactsOutlined,
  ExceptionOutlined,
  FileOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Leftbar = ({ children, open }) => {
  const history = useHistory();
  const [bar, setBar] = useState({
    bar1: false,
    bar2: false,
    bar3: false,
  });
  return (
    <div className="leftbar">
      <div className="leftbar-left">
        <Menu
          style={{ width: "98%" }}
          theme="dark"
          defaultSelectedKeys={[`${open}`]}
        >
          <Menu.Item
            key="1"
            icon={<AppstoreOutlined />}
            onClick={() => history.push("/beranda")}
          >
            Dashboard
          </Menu.Item>
          <SubMenu title="Data Master" key="sub1" icon={<ContainerOutlined />}>
            <Menu.Item
              key="2"
              icon={<FileOutlined />}
              onClick={() => history.push("/data-barang")}
            >
              Data Barang
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<ReconciliationOutlined />}
              onClick={() => history.push("/return")}
            >
              Return
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Transaksi" key="sub2" icon={<ContactsOutlined />}>
            <Menu.Item
              key="4"
              icon={<LayoutOutlined />}
              onClick={() => history.push("/barang-masuk")}
            >
              Barang Masuk
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<ScheduleOutlined />}
              onClick={() => history.push("/barang-keluar")}
            >
              Barang Keluar
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Laporan" key="sub3" icon={<ExceptionOutlined />}>
            <Menu.Item
              key="6"
              icon={<CalendarOutlined />}
              onClick={() => history.push("/stock-barang")}
            >
              Stock Barang
            </Menu.Item>
          </SubMenu>
        </Menu>
        {/* <div className="left-bar-text-container">
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
        </div> */}
      </div>
      <div className="leftbar-right">{children}</div>
    </div>
  );
};

export default Leftbar;
