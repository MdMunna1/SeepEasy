import { useContext } from "react";
import "./App.css";
import { motion } from "framer-motion"; // ফ্রেমার মোশন ইমপোর্ট করুন
import ContexComponent, { MainContex } from "./Contex/ContexComponent";
import Navber from "./Component/Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

function App() {
  let { googleLogin, user } = useContext(MainContex);

  return (
    <>
    <section className="border-gray-400">

   

      <section className="sticky top-0 z-10 ">
        <Navber />
      </section>
    <div className="w-[98%] mx-auto">
      {/* OUTlet section */}
      <section>
        <Outlet />
      </section>

      {/* Footer section */}
      <section>
        <Footer />
      </section>
      </div>
      </section>

    </>
  );
}

export default App;
