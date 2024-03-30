import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

import Reservation from "./components/Reservation/Reservation";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order Online/Order";

import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Specials />
                <Testimonials />
                <About />
              </>
            }
          ></Route>
          <Route path="/menu" element={<Menu />} exact></Route>
          <Route path="/reservations" element={<Reservation />}></Route>
          <Route path="/order_online" element={<Order />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default App;
