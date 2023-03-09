import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import AGB from "./pages/AGB";
import FavoriteMovies from "./pages/FavoriteMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="AGB" element={<AGB></AGB>} />
          <Route path="favorite" element={<FavoriteMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
