import React from "react";
import "./table.css";

const Table = () => {
  return (
    <>
      <h1 id="title">React Table</h1>

      <table class="table table-hover" className="table">
        <thead>
          <tr className="tableHeading">
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Shift</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody className="tablebody">
        <tr className="tableitem">
            <th scope="row">1</th>
            <td>Aaditya</td>
            <td>14-12-11</td>
            <td>Morning</td>
            <td>10pm</td>
            <td>12pm</td>
            <td className="operations">
              <button className="button-success">update</button>
              <button className="button-danger">Delete</button>
            </td>
          </tr>
         
          <tr className="tableitem">
            <th scope="row">1</th>
            <td>Aaditya</td>
            <td>14-12-11</td>
            <td>Morning</td>
            <td>10pm</td>
            <td>12pm</td>
            <td className="operations">
              <button className="button-success">update</button>
              <button className="button-danger">Delete</button>
            </td>
          </tr> <tr className="tableitem">
            <th scope="row">1</th>
            <td>Aaditya</td>
            <td>14-12-11</td>
            <td>Morning</td>
            <td>10pm</td>
            <td>12pm</td>
            <td className="operations">
              <button className="button-success">Update</button>
              <button className="button-danger">Delete</button>
            </td>
          </tr>
          <tr className="tableitem">
            <th scope="row">1</th>
            <td>Aaditya</td>
            <td>14-12-11</td>
            <td>Morning</td>
            <td>10pm</td>
            <td>12pm</td>
            <td className="operations">
              <button className="button-success">update</button>
              <button className="button-danger">Delete</button>
            </td>
          </tr>
          <tr className="tableitem">
            <th scope="row">1</th>
            <td>Aaditya</td>
            <td>14-12-11</td>
            <td>Morning</td>
            <td>10pm</td>
            <td>12pm</td>
            <td className="operations">
              <button className="button-success">Update</button>
              <button className="button-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
