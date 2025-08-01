import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  const [user,setUser] = useState("")

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData.firstname + " " + formData.lastname);
  };

  return (
    <div>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {user && (
        <div style={{ marginTop: "20px" }}>
          <p>Full Name: {user}</p>
        </div>
      )}
    </div>
  );
};

export default App;
