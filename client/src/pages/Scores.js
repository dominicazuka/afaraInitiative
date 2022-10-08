import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Axios from "../config";

const Scores = () => {

  const [scores, setScores] = useState({})

  useEffect(() => {
    getAllUsers();
    return () => {
      
    }
  }, [])
  
  const getAllUsers = async () => { 
    try {
      const { data } = await Axios.get("/users/getallusers");
      setScores(data)
      console.log("Data",data)
      // setusers(data.users);
      // setTotalUsers(data.totalUsers);
      // setloading(false);
    } catch (error) {
      // setloading(false);
      // seterror(error);
    }
  }

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  )
}

export default Scores