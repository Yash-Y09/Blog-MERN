import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  };
  return (
    <>
      <div className="app">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="post/:id" element={<Single />} />
                <Route path="write" element={<Write />} />
              </Route>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
