import React from "react";

export default function About(props) {
  return (
    <div>
      <section>
        <img
          src={require("../images/black-furniture-bedroom.jpg")}
          alt="chair"
        />
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

        <div className="topRightAbout">
          <h1>About us </h1>
          <p style={{ marginTop: "0px" }}>
            <br />
            room was established in 1889, in Lenoir NC, by John Mathias
            Bernhardt. We are among the country’s largest family-owned furniture
            companies and a leading diversified global furniture manufacturer.
            The company operates eight manufacturing facilities and its
            corporate headquarters in North Carolina, and employs some 1,540
            people worldwide including six overseas offices. Our 75,000 sq. ft.
            showroom is located in High Point NC. Our furniture is found in
            homes, offices, hotels and universities worldwide. Our furniture has
            received numerous awards for product design excellence in diverse
            market segments.
          </p>
        </div>
        <div className="bottomHalf">
          <img src={require("../images/buying-bed.jpg")} alt="darkimage" />
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
