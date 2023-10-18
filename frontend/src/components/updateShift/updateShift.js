import React, { useState } from 'react';
import './updateShift.css';

const UpdateShift = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('Morning');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:00');

  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(name.length<3){
     alert("Please enter a valid data");
     return;
    }
    setName("");
    setDate("")
    setStartTime("");
    setEndTime("");
    setShift("morning")
    // You can access the form values from the state variables here (name, date, shift, startTime, endTime).
    console.log(name, date, shift, startTime, endTime);
  };

  return (
    <form class="row g-3 needs-validation "  className="formBox" onSubmit={formSubmitHandler}  >
      <h1 className="heading">Update Shift</h1>
      <div class="mb-3">
        <label htmlFor="exampleFormControlInput1" class="form-label">
          Enter Your Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="p-2">
        <div class="mb-3 d-flex justify-content-between">
          <div>
            <label htmlFor="date" class="form-label">
              Date
            </label>
            <input
              type="date"
              class="form-control"
              id="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="shift" class="form-label text-center">
              Shift
            </label>
            <div>
            <select class="form-select" aria-label="Default select example">
  <option selected>Select shift</option>
  <option value="Morning">Morning</option>
  <option value="Evening">Evening</option>
  <option value="Night">Night</option>
</select>
            </div>
          </div>
        </div>
        <div class="mb-3 d-flex justify-content-between">
          <div>
            <label htmlFor="startTime" class="form-label">
              Shift Start Time
            </label>
            <input
              type="time"
              class="form-control"
              id="startTime"
              required
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="endTime" class="form-label">
              Shift End Time
            </label>
            <input
              type="time"
              class="form-control"
              id="endTime"
              required
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto d-flex ">
        <button class="btn btn-danger" type="submit" style={{color:'white'}}>
         Cancel
        </button>
        <button class="btn btn-success" type="submit">
        Update
        </button>
      </div>
    </form>
  );
};

export default UpdateShift;