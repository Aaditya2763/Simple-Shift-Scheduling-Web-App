import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // You need to import axios for making the fetch request.
import "./table.css";

const Table = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/schedule"); // Use axios.get to make a GET request
      setData(response.data); // Access the data property from the response
      setLoading(false);
      setError(false)
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
 

    fetchTableData();
  }, []);


  const deleteDataHandler = async (id) => {
    try {

      loading(true)

      await axios.delete(`http://localhost:5000/shift/delete/${id}`); // Use axios.get to make a GET request
      // Access the data property from the response
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    
    }
  };


  

  return (
    <>
      <h1 className="title">React Table</h1>
      {loading && <div className="loading"><h2>Loading...</h2></div>}
      {error && <div className="loading"><h2>Something went wrong try again!</h2>
      <button className="button-success" onClick={fetchTableData}>Try Aagin</button>
      </div>}
      {data && (
        <table className="table">
          <thead>
            <tr className="tableHeading">
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Shift</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Operations
              </th>
            </tr>
          </thead>

          <tbody className="tablebody">
         
            {data.map((item, index) => (
              
              <tr className="tableitem" key={index}>
                
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.date.split("T")[0]}</td>
                <td>{item.shift}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td className="operations">
                <Link to={`/update-shift/${item._id}`}  className="updateBtn">
                  <button className="button-success">
                    
                      Update
                   
                  </button>
                  </Link>
                  <button className="button-danger" onClick={deleteDataHandler}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
