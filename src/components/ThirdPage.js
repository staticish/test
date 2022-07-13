import React from "react";

export default function ThirdPage(props) {
  return (
    <div>
      <section>
        <img src={require("../images/desktop-image-hero-3.jpg")} alt="chair" />
        <nav className="menu">
          <div id="menuBar" className="menuBar">
            <button>
              <img
                className="menuIcon"
                src={require("../images/menuIcon.png")}
                alt="menuIcon"
                height="20px"
              />
            </button>
            <div className="menuList">
              <svg
                height="30px"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>
              <ul>
                <li onClick={props.homePage}>room </li>
                <li onClick={props.homePage}>home </li>
                <li onClick={props.shopPage}>shop </li>
                <li onClick={props.aboutPage}> about </li>
                <li onClick={props.contactPage}>contact </li>
              </ul>
            </div>
          </div>
          <span onClick={props.homePage}> room </span>
        </nav>

        <div className="topRight">
          <h1> Manufactured with the best materials </h1>
          <p>
            <br />
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <span onClick={props.shopPage}>
            SHOP NOW
            <svg
              className="arrow"
              width="40"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fill-rule="nonzero"
              />
            </svg>
          </span>
          <div className="nav">
            <svg
              onClick={props.backPage}
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
            </svg>
            <svg
              onClick={props.nextPage}
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
            </svg>
          </div>
        </div>
        <div className="bottomHalf">
          <img
            src={require("../images/image-about-dark.jpg")}
            alt="darkimage"
          />
          <div>
            <h1>ABOUT OUR FURNITURE</h1>{" "}
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.{" "}
            </p>
          </div>
          <img
            src={require("../images/image-about-light.jpg")}
            alt="darkimage"
          />
        </div>
      </section>
    </div>
  );
}
