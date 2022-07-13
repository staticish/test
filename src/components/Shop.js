import React from "react";
import data from "./data";

export default function Shop(props) {
  const [toggle, setToggle] = React.useState(
    () => JSON.parse(localStorage.getItem("toggle")) || false
  );
  const [selectedItem, setSelectedItem] = React.useState(
    () => JSON.parse(localStorage.getItem("Items")) || []
  );
  function tag(name, price, id) {
    if (name) {
      setToggle(true);
    }

    const item = {
      id: id,
      name: name,
      price: price
    };

    setSelectedItem((oldItem) => oldItem.filter((item) => item.name !== name));
    setSelectedItem((prev) => [...prev, item]);
  }

  React.useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(selectedItem));
  }, [selectedItem]);

  function removeItem(event, obj) {
    event.stopPropagation();
    setSelectedItem((oldItem) => oldItem.filter((item) => item.id !== obj));
    if (selectedItem.length === 1) {
      setToggle(false);
    }
  }
  function removeAll(obj) {
    localStorage.clear();
    setSelectedItem((oldItem) => oldItem.filter((item) => item.id === obj));
    setToggle(false);
    localStorage.setItem("toggle", JSON.stringify(toggle));
  }
  const elements = data.map((item) => {
    return (
      <div
        key={item.id}
        className="card"
        onClick={() => tag(item.name, item.price, item.id)}
      >
        <div className="price"> ${item.price} </div>
        <a href="#total">
          <div> </div>
          <img src={item.image} height={"300px"} alt="shopItems" />
        </a>
      </div>
    );
  });
  return (
    <div>
      <section>
        <img src={require("../images/buying-furn.jpg")} alt="chair" />

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
          <h1> We have all kinds of furnitures </h1>
          <p style={{ fontSize: "20px" }}>
            <br />
            Welcome to the shop. Over here, you can browse through our
            collection of eloquent furnitures of different materials from around
            the world, designed for your needs. Our designs are very human
            friendly, and cannot hurt you or your family members. So What are
            you waiting for? Start buying.
          </p>
        </div>
        <div className="bottomShop">
          <div className="elements">{elements}</div>
          <div className="listBox">
            {selectedItem.map((item) => {
              return (
                <div key={item.id} className="list">
                  <h3>
                    {item.name}
                    <button onClick={(event) => removeItem(event, item.id)}>
                      remove
                    </button>
                  </h3>
                  <h5>${item.price} </h5>
                </div>
              );
            })}
            <br />
            {toggle === true ? (
              <button
                className="removeAll"
                style={{ width: "100px" }}
                onClick={() => removeAll(selectedItem.id)}
              >
                Remove all
              </button>
            ) : (
              ""
            )}
            <div id="total" className="total">
              Total: $
              {selectedItem.reduce((acc, item) => {
                return acc + item.price;
              }, 0)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
