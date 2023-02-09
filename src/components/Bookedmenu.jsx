import React, { useEffect } from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import "./signup.css";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import qr from "../images/movies_screen/Default.png";

import { Movies } from "./Moviedata";

function Bookedmenu() {
    const navigate=useNavigate()
    const [show, setShow] = useState(false);

    
    // const handleShow = () =>;
  const { price } = useParams();

  const { count } = useParams();

  console.log("priceeeee===>", price);
  console.log("counteeeee===>", count);

  const booking = JSON.parse(localStorage.getItem("booking"));

  console.log("booking==>", booking);

  const [mov, setmov] = useState([]);

  const { movieid } = useParams();

  useEffect(() => {
    const filter = Movies.filter((data) => {
      return data.id == movieid;
    });

    setmov(filter[0]);
    for (var i = 0; i < booking.length; i++) {}
  }, []);

  console.log("selectedMoviee====>", mov);

  const [values, setValues] = useState({
    username: "",
    email: "",

    phonnumber: "",
    cardnumber: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "phonnumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "Phone Number should Have 10 Number",
      label: "phone",
      pattern: `/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/`,
      required: true,
    },

    {
      id: 4,
      name: "cardnumber",
      type: "text",
      placeholder: "Credit/Debit  Number",
      errorMessage: "Starting with 4 length 13 or 16 digits",
      label: "Credit/Debit",
      pattern: `/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{7})$/`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true)
   

  
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
   
  };
  const handleClose = () =>{ 
    setShow(false)
    navigate("/")

}

//   localStorage.setItem("user", JSON.stringify(values));

  return (
    <div className="formapp2">
      <div className="disply">
        <div className="image">
          <img src={mov?.posterUrl} />
          <h2 >{mov?.title}</h2>

          <h3> Seats Numbers : {booking.slice(1)} </h3>
          <h3>Tickets : {count.slice(1)}</h3>
          <h2>Amount : {price.slice(1)}</h2>
        </div>
      </div>

      <form className="form1" onSubmit={handleSubmit}>
        <h1>Book Tickets</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button >Confirm </button>
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <h1 className="modalhesd"><i class="fa-solid fa-thumbs-up"></i>Ticket Confirmed</h1>
        <Modal.Header>
          {/* <Modal.Title><h1 className="modalhesd"><i class="fa-solid fa-thumbs-up"></i>Ticket Confirmed</h1></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            <div className="modalitems">
        <div className="imgcon"> <img src={mov?.posterUrl}/></div>
        <div className="headeritemd">
            <h2 id="hedmod">{mov?.title}</h2>
            <h2>Seat Number : {booking.slice(1)} </h2>

            <h2>Tickets : {count.slice(1)}</h2>
            <h2>Status : Confirmed</h2>
            <img src={qr} alt="" />
      
        </div>


            </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Back to Home
          </Button>

          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Bookedmenu;
