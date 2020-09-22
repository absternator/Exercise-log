import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Exersize(props) {
  return (
    <tr>
      <td>{props.exersize.username}</td>
      <td>{props.exersize.description}</td>
      <td>{props.exersize.duration}</td>
      <td>{props.exersize.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exersize._id}>
          <button className="btn btn-outline-primary btn-sm">edit</button>
        </Link>{" "}
        |{" "}
        <a
          href="#"
          className="btn btn-danger btn-sm"
          role = "button"
          onClick={() => {
            props.deleteExersize(props.exersize._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
}
function ExersizeList() {
  const [exersizeList, setExersizeList] = useState([]);
  // on effect
  useEffect(() => {
    axios
      .get("http://localhost:5000/exersizes/")
      .then((res) => {
        setExersizeList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      return () => {
        console.log("clean up");
      }
     
  }, []);
  // on delete
  function deleteExersize(id) {
    axios
      .delete("http://localhost:5000/exersizes/" + id)
      .then((res) => console.log(res.data));
      // set new list to remove deleted element
    setExersizeList((prevList) => {
      return prevList.filter((exersize) => {
        return exersize._id !== id;
      });
    });
  }
  function exerList() {
    return exersizeList.map((currentExersize) => {
      return (
        <Exersize
          exersize={currentExersize}
          deleteExersize={deleteExersize}
          key={currentExersize._id}
        />
      );
    });
  }
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerList()}</tbody>
      </table>
    </div>
  );
}

export default ExersizeList;
