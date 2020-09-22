import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [user, setUser] = useState({
    username: "",
  });

  function onChangeUsername(event) {
    const value = event.target.value;
    setUser({ username: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(user);
    // axios to send to backend endpoint - needs JSON object
    axios.post("http://localhost:5000/users/add",user)
    .then(res => console.log(res.data));
    window.location = "/create"
    // reset
    setUser({ username: "" });
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={user.username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
