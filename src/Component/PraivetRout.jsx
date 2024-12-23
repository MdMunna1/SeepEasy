import React, { useContext } from 'react'
import { MainContex } from '../Contex/ContexComponent';
import { Navigate } from 'react-router-dom';


const PraivetRout = ({ children }) => {
    let { loder, user } = useContext(MainContex);


    if (loder) {
      return <>
        <div className="flex justify-center p-12">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>;
    }
    if (!user) {
      return (
        <>
          <Navigate to={"/login"}></Navigate>;
        </>
      );
    }
    if (user) {
      return <>{children}</>;
    }
}

export default PraivetRout