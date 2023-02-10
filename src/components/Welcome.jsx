import React from "react";
import Navbar1 from "./Navbar";
import "./style.css";
import { Movies } from "./Moviedata";
// import { Link } from "react-router-dom";
import { useNavigate, createSearchParams } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const bookseat = JSON.parse(localStorage.getItem("bookseat"));

  // console.log("bookseat==>", bookseat);

  const bookingid = (id) => {
    // console.log("id===>",id);
    navigate({
      pathname: "/booking",
      search: createSearchParams({
        
        id: id,
      }).toString()
    })
  };

  return (
    <>
      <div className="container_wrapper">
        <header>
          <div className="mic-dot">
            <div className="mic"></div>
            <div className="dot"></div>
          </div>
          <Navbar1 />
          <section>
            <div className="content">
              <h1>
                MONEY <span>HEIST</span>
              </h1>
              <h3>Season 5</h3>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              {/* <div className="subtitle">
                action <span>/</span>drama <span>/</span>Thriller
              </div> */}
              <div className="btns">
                <button>
                  <i class="fa-solid fa-play"></i>
                </button>
                <button>
                  <i class="fa-solid fa-cloud-arrow-down"></i>
                </button>
              </div>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos deserunt praesentium minus soluta consectetur, odit reprehenderit sapiente quia, ipsum laborum magnam labore nobis. Quo atque modi soluta doloremque in.</p> */}
            </div>
          </section>
          <h1 className="mov">Latest Movies</h1>

          <div className="cards">
            {Movies &&
              Movies.map((item) => (
                <>
                  {/* <Link to={`/booking/${item.id}`}> */}
                  <div
                    className="card"
                    onClick={() => {
                      bookingid(item.id);
                    }}
                  >
                    <img src={item?.posterUrl} />
                  </div>
                  {/* </Link> */}
                </>
              ))}
          </div>
          <img src="img/section_img.png" alt="" className="main_img" />
        </header>
      </div>
    </>
  );
}

export default Welcome;
