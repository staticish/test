import React from "react";

export default function Contact(props) {
  return (
    <div>
      <section>
        <img src={require("../images/round-chair.jpg")} alt="chair" />
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
          <h1> Contact Us </h1>
          <p>
            <br />
            You can contact us on Facebook, Instagram and Twitter. Our handles
            are not available right now, due to some issues.
            <hr />
            Press and marketing enquiries: pressMarketer@room.com Contract
            Dealer & Designer Inquiries http://www.roomdesign.com/global/
            Contract Dealer & Designer Inquiries
            http://www.roomdesign.com/global/ Hospitality Dealer & Designer
            Inquiries contact@roomhospitality.com International Inquiries
            export@room.com
          </p>
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
