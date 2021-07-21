import "./StockBarang.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Table, Tag, Space, Input, Button } from "antd";
import { useEffect, useState } from "react";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
function StockBarang() {
  const [change, setChange] = useState({
    searchText: "",
    searchedColumn: "",
    searchInput: "",
  });
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            change.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setChange({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => change.searchInput.select(), 100);
      }
    },
    render: (text) =>
      change.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[change.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setChange({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setChange({ searchText: "" });
  };
  const history = useHistory();
  const columns = [
    {
      title: "No",
      key: "no",
      render: (text, record, i) => <Space size="middle">{(i += 1)}</Space>,
    },
    {
      title: "ID Barang",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Nama Barang",
      dataIndex: "nama",
      key: "nama",
      ...getColumnSearchProps("nama"),
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
      ...getColumnSearchProps("kategori"),
    },
    {
      title: "Merk",
      dataIndex: "merk",
      key: "merk",
    },
    {
      title: "Stock",
      key: "stock",
      render: (text, record, i) => (
        <Space size="middle">
          {text.datamasuks.length && text.datakeluars.length
            ? text.datamasuks
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next) +
              text.datakeluars
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datamasuks.length
            ? text.datamasuks
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : text.datakeluars.length
            ? text.datakeluars
                .map((e) => e.stock)
                .reduce((prev, next) => prev + next)
            : 0}
        </Space>
      ),
    },
  ];

  function stock(item) {
    return item.Amount;
  }

  const [barang, setBarang] = useState([]);
  const [datax, setDatax] = useState([]);
  useEffect(() => {
    fetch("http://toko-barokah.herokuapp.com/api/data-barang", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setBarang(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="stock-barang">
      <Navbar />
      <Leftbar>
        <div className="row-data-barang">
          <h1>Laporan Stock Barang</h1>{" "}
          <button
            onClick={() => {
              if (window.confirm("Apakah Anda Mau Print")) {
                history.push("/print");
              }
            }}
          >
            <i className="fas fa-print"></i>
            Print
          </button>
        </div>
        <Table
          bordered
          columns={columns}
          dataSource={barang}
          style={{ marginBottom: "10px", marginTop: "25px" }}
        />
      </Leftbar>
    </div>
  );
}

const Isi = ({ no, stock }) => {
  return (
    <div className="table-stock-barang-isi">
      <p>{no}</p>
      <p>0987</p>
      <p>Yonex Arcsber 10</p>
      <p>Raket</p>
      <p>Yonex</p>
      <p
        style={{
          backgroundColor: stock ? "red" : "inherit",
          color: stock ? "white" : "black",
          padding: stock ? "5px 5px" : 0,
          width: stock ? "50px" : "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        23
      </p>
    </div>
  );
};

export default StockBarang;
