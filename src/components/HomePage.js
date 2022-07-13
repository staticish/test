import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import React from "react";

export default function HomePage() {
  const [page, setPage] = React.useState(0);
  function next() {
    setPage((prev) => prev + 1);
    if (page > 1) {
      setPage(0);
    }
  }

  function back() {
    setPage((prev) => prev - 1);
    if (page < 1) {
      setPage(2);
    }
  }

  function home() {
    setPage(0);
  }

  function shop() {
    setPage(3);
  }
  function about() {
    setPage(4);
  }
  function contact() {
    setPage(5);
  }
  const Next = (page) => {
    // console.log(page);
    switch (page) {
      case 0:
        return (
          <FirstPage
            backPage={back}
            nextPage={next}
            shopPage={shop}
            aboutPage={about}
            contactPage={contact}
          />
        );
      case 1:
        return (
          <SecondPage
            backPage={back}
            nextPage={next}
            homePage={home}
            shopPage={shop}
            aboutPage={about}
            contactPage={contact}
          />
        );
      case 2:
        return (
          <ThirdPage
            backPage={back}
            nextPage={next}
            homePage={home}
            shopPage={shop}
            aboutPage={about}
            contactPage={contact}
          />
        );
      case 3:
        return <Shop homePage={home} aboutPage={about} contactPage={contact} />;
      case 4:
        return <About homePage={home} shopPage={shop} contactPage={contact} />;
      case 5:
        return <Contact homePage={home} shopPage={shop} aboutPage={about} />;
      default:
        return <FirstPage backPage={back} nextPage={next} shopPage={shop} />;
    }
  };
  return <div> {Next(page)}</div>;
}
