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
      <section>
        <Navber />
      </section>
      {/* OUTlet section */}
      <section>
        <Outlet />
      </section>

      {/* Footer section */}
      <section>
        <Footer />
      </section>
      <div className="App">
        <motion.h1
          animate={{    x: [0, 100, -100, 0], color: ["#ff0000", "#00ff00", "#0000ff"] }} // রঙের তালিকা
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity, // বারবার লুপ করবে
            // repeatType: "loop", // লুপ হিসেবে চলবে
          }}
          className="p-4 text-4xl font-bold bg-black text-center"
        >
          Munna
        </motion.h1>

        {/* motion.button ব্যবহার */}
        <motion.button
          onClick={googleLogin}
          className="p-4 bg-gray-400 mt-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Google Login
        </motion.button>
      </div>
    </>
  );
}

export default App;
