import "./bookticket.css";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Movies } from "./Moviedata";
import Image1 from "../images/movies_screen/screen.png";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate, createSearchParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";



export default function Bookticket() {
  const [datm, setdatm] = useState(["", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
]);
const navigate=useNavigate()
const [data]=useSearchParams()
// const { movieid } = useParams();
// console.log(data.get("id"));
const movieid=data.get("id")


const booking = JSON.parse(localStorage.getItem("booking"));

console.log("booking==>", booking);
  const [book, setBook] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));






  const [mov, setmov] = useState([]);

  

  useEffect(() => {
    const filter = Movies.filter((data) => {
      return data.id == movieid;
    });

    setmov(filter[0]);
for(var i=0;i<booking.length;i++){

}






  }, []);

  // console.log("selectedMoviee====>", mov);
  let j = [];
  const bookseat = (event, index) => {



    console.log("eeee===>", event, index);
    if (datm[index] == 1) {
      event.target.style.background = "#ad1025";
      datm[index] = "";
      for (var i = 0; i < datm.length; i++) {
        if (datm[i] == "1") {
          j = j + ","+ i;
        }
      }
    }
    else {
      datm[index] = 1;
      event.target.style.background = "green";
     
      for (var i = 0; i < datm.length; i++) {
        if (datm[i] == "1") {
          j = j + ","+i;
        }
    }
  
    }

    setBook(j);
  };


  const handleShow = (Price,count,movieid) => {
    // console.log("looooooo====>",Price,count,movieid);

    localStorage.setItem("booking", JSON.stringify(book));

    navigate({
      pathname: "/bookmenu",
      search: createSearchParams({
        movieid:movieid,
        Price:Price,
        count:count

        
      }).toString()
    })
   
    

  };



  


  const ref = useRef(null);
  console.log(ref);
  const [count, setCount] = useState('');
  const [Price, setPrice] = useState('');
  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        // e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + 150);
      } else {
        e.target.style.background = " #01163E";
        setCount(count  - 1);
        setPrice(Price - 150);
      }
    }
  }


  return (
    <body1>
      <div className="container1">
        <div className="cards1">
          <div className="card1">
            <img className="img" src={mov?.posterUrl} />
            {/* <br/><h2>{mov?.title}</h2> */}
            {/* <h2>{mov?.runtime} hr</h2> */}
          </div>
        </div>

        <div className="row-container">
          <ul className="showcase">
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
          </ul>
          <div className="movie-screen">
            <img src={Image1} alt="screen" />
          </div>
          <div onClick={changecolor} className="row">
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 0);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 1);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 2);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 3);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 4);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 5);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 6);
              }}
            ></div>
            <div
              className="seat"
              value="a1"
              onClick={(e) => {
                bookseat(e, 7);
              }}
            ></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat" value="a1"   onClick={(e) => {bookseat(e, 8)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,9 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,10 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 11)}}></div>
            <div className="seat" value="a1"   onClick={(e) => {bookseat(e,12 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 13)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,14 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,15 )}}></div>
          </div>
          <div onClick={changecolor} className="row">
          <div className="seat" value="a1"   onClick={(e) => {bookseat(e,16 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,17 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 18)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,19 )}}></div>
            <div className="seat" value="a1"   onClick={(e) => {bookseat(e,20 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,21 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,22 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,23 )}}></div>
          </div>
          <div onClick={changecolor} className="row">
          <div className="seat" value="a1"   onClick={(e) => {bookseat(e,24 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 25)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 26)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,27 )}}></div>
            <div className="seat" value="a1"   onClick={(e) => {bookseat(e, 26)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 29)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 30)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 31)}}></div>
          </div>
          <div onClick={changecolor} className="row">
          <div className="seat" value="a1"   onClick={(e) => {bookseat(e,32)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 33)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 34)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 35)}}></div>
            <div className="seat" value="a1"   onClick={(e) => {bookseat(e,36 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e,37 )}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 38)}}></div>
            <div className="seat" value="a1" onClick={(e) => {bookseat(e, 39)}}></div>
          </div>
         
          <h5 className="subtitle"> ₹150</h5>
        </div>

    
        <div className="text-wrapper">
        {(count&&Price)&&(
        <>
        <p className="text">
            Selected Seats<span id="count">{count}</span>
          </p>
          <p className="text">
            Total Price<span id="total">{Price} ₹</span>
          </p>
          <body2>
            {" "}
            
            <div id="button" onClick={()=>{handleShow(Price,count,movieid)}}>
            {/* <Link to={`/bookmenu/${Price}/${count}/${ movieid }`}> */}
              <span id="text">Book</span>
             
              {/* </Link> */}
            </div>
          </body2>
        </>
        )}
          
        </div>
      </div>
     
    </body1>
  );
}
