import Header from "../Header";
import Flowers from "../../Pages/Flowers";
import Home from "../../Pages/Home";
import Plants from "../../Pages/Plants";
import Gift from "../../Pages/Gift";
import Discount from "../../Pages/Discounts";
import AboutUs from "../../Pages/AboutUs";
import Info from "../../Pages/Info";
import Footer from "../Footer";

import "./style.scss";
import { Route, Routes } from "react-router-dom";

const index = () => {
  return (
    <>
      <Header />
      <main className="mt-[200px] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="flowers/:id" element={<Info />} />
          <Route path="plants/:id" element={<Info />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default index;
