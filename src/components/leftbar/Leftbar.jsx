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
          style={{ width: "98%", paddingTop: "10px" }}
          theme="dark"
          defaultSelectedKeys={[1]}
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
      </div>
      <div className="leftbar-right">{children}</div>
    </div>
  );
};

export default Leftbar;
