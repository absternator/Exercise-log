import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function CreateExersize() {
  const [exersize, setExersize] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });
  //   side Effect, on [] change, thus only on mount
  useEffect(() => {
    // show user drop down list of users added
    axios.get("http://localhost:5000/users")
    .then(res => {
      if(res.data.length > 0) {
        setExersize((prevState) =>{
          return {
            ...prevState,
            users: res.data.map(user => {return user.username}),
            username: res.data[res.data.length -1 ].username
          }

        });
      }
    });
  }, []);
  function onChangeDescription(event) {
    const value = event.target.value;
    setExersize((prevState) => {
      return {
        ...prevState,
        description: value,
      };
    });
  }
  function onChangeDuration(event) {
    const value = event.target.value;
    setExersize((prevState) => {
      return {
        ...prevState,
        duration: value,
      };
    });
  }
  function onChangeDate(date) {
    setExersize((prevState) => {
      return {
        ...prevState,
        date: date,
      };
    });
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(exersize);
     // axios to send to backend endpoint - needs JSON object
     axios.post("http://localhost:5000/exersizes/add",exersize)
     .then(res => console.log(res.data));
     window.location = "/";
  }
  function onChangeUsername(event) {
    const value = event.target.value;
    setExersize((prevState) => {
      return {
        ...prevState,
        username: value,
      };
    });
    // window.location = "/";
  }
  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            // ref="userInput"
            required
            className="form-control"
            value={exersize.username}
            onChange={onChangeUsername}
          >
            {exersize.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={exersize.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={exersize.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={exersize.date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExersize;
