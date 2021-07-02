import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import BarangKeluar from "./pages/barang-keluar/BarangKeluar";
import TambahBarangKeluar from "./pages/barang-keluar/tambah-barang-keluar/TambahBarangKeluar";
import BarangMasuk from "./pages/barang-masuk/BarangMasuk";
import TambahBarangMasuk from "./pages/barang-masuk/tambah-barang-masuk/TambahBarangMasuk";
import Beranda from "./pages/Beranda/Beranda";
import Dashboard from "./pages/dashboard/Dashboard";
import DataBarang from "./pages/data-barang/DataBarang";
import TambahBarang from "./pages/data-barang/tambah-barang/TambahBarang";
import Login from "./pages/login/Login";
import Return from "./pages/return/Return";
import TambahReturn from "./pages/return/tambah-return/TambahReturn";
import Print from "./pages/stock-barang/print/Print";
import StockBarang from "./pages/stock-barang/StockBarang";
import "./App.css";
import User from "./pages/user/User";
import TambahPengguna from "./pages/user/tambah-pengguna/TambahPengguna";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/tambah-user">
            <TambahPengguna />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/print">
            <Print />
          </Route>
          <Route path="/stock-barang">
            <StockBarang />
          </Route>
          <Route path="/tambah-barang-keluar">
            <TambahBarangKeluar />
          </Route>
          <Route path="/barang-keluar">
            <BarangKeluar />
          </Route>
          <Route path="/tambah-barang-masuk">
            <TambahBarangMasuk />
          </Route>
          <Route path="/barang-masuk">
            <BarangMasuk />
          </Route>
          <Route path="/tambah-return">
            <TambahReturn />
          </Route>
          <Route path="/return">
            <Return />
          </Route>
          <Route path="/tambah-barang">
            <TambahBarang />
          </Route>
          <Route path="/data-barang">
            <DataBarang />
          </Route>
          <Route path="/beranda">
            <Beranda />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
