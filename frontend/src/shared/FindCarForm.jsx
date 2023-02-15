import React, { useRef } from "react";
import "./find-car-form.css";
// import "./styles/find-car-form.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
const FindCarForm = () => {

  const locationRef = useRef("");
  const pickUpDateRef = useRef(0);
  const dropOffDateRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {

    const location = locationRef.current.value;
    const pickUpDate = pickUpDateRef.current.value;
    const dropOffDate = dropOffDateRef.current.value;

    if (location === "" || pickUpDate === "" || dropOffDate === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(`${BASE_URL}/cars/search/getCarBySearch?city=${location}&pickUpDate=${pickUpDate}&dropOffDate=${dropOffDate}`)

    if (!res.ok) alert('Something went wrong')

    const result = await res.json()

    navigate(`/cars/search?city=${location}&pickUpDate==${pickUpDate}&dropOffDate=${dropOffDate}`, { state: result.data })
  }


  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Location"
            // required 
            ref={locationRef} />
        </FormGroup>

        {/* <FormGroup className="form__group">
          // <input type="text" placeholder="To address" required />
        </FormGroup> */}

        <FormGroup
          className="form__group">
          <input type="date"
            placeholder="Pick Up date"
            // required 
            ref={pickUpDateRef}
          />
        </FormGroup>

        <FormGroup
          className="form__group">
          <input
            className="time"
            type="date"
            placeholder="Drop-off date"
            // required
            ref={dropOffDateRef}
          />
        </FormGroup>
        {/* <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup> */}

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit" onClick={searchHandler}>Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
