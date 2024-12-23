import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import DesingRoms from './DesingRoms';
import { MainContex } from '../Contex/ContexComponent';

const Rooms = () => {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    fetchallData();
  }, []);
  const fetchallData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allrooms`);
    setrooms(data);
  };
  


  if(!rooms) return <p>loding....</p>

  return <>
  <section>
    serch section
  </section>
  <div className='grid sm:grid-cols-2 bg-slate-100 gap-4'>
    {
      rooms?.map(all=> <DesingRoms key={all._id} room={all}   />)
    }

  </div>
  </>
}

export default Rooms