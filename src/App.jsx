import "./App.css";
import { useState } from "react";

function App() {
  // Dark mode function
  const [dark, setDark] = useState(
    localStorage.getItem("dark")
      ? JSON.parse(localStorage.getItem("dark"))
      : false
  );
  const [open, setOpen] = useState(false);

  // create db function
  const [db, setDb] = useState([
    {
      id: 1,
      img: "/box1.1.svg",
      title: "JAZZMASTER",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "featured",
      price: "$1050",
    },
    {
      id: 2,
      title: "INGERSOLL",
      info: "INGERSOLL is a brand that has been characterized by its quality and resistance, with a modern and elegant design.",
      new: false,
      sale: true,
      type: "featured",
      price: "$250",
      img: "/box1.2.svg",
    },
    {
      id: 3,
      title: "ROSE GOLD",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "featured",
      price: "$890",
      img: "/box1.3.svg",
    },
    {
      id: 4,
      title: "SPIRIT ROSE",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "products",
      price: "$1500",
      img: "/sct3.1.svg",
    },
    {
      id: 5,
      title: "KHAKI PILOT",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "products",
      price: "$1350",
      img: "/sct3.2.svg",
    },
    {
      id: 6,
      title: "JUBILEE BLACK",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "products",
      price: "$870",
      img: "/sct3.3.svg",
    },
    {
      id: 7,
      title: "FOSIL ME3",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "products",
      price: "$650",
      img: "/sct3.4.svg",
    },
    {
      id: 8,
      title: "DUCHEN",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: false,
      sale: true,
      type: "products",
      price: "$950",
      img: "/sct3.5.svg",
    },
    {
      id: 9,
      title: "LONGINES ROSE",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: true,
      sale: false,
      type: "arrivals",
      price: "$980",
      img: "/box1.3.svg",
    },
    {
      id: 10,
      title: "JAZZMASTER",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: true,
      sale: false,
      type: "arrivals",
      price: "$1150",
      img: "/box3.1.svg",
    },
    {
      id: 11,
      title: "DREYFUSS GOLD",
      info: "Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.",
      new: true,
      sale: false,
      type: "arrivals",
      price: "$750",
      img: "/box3.4.svg",
    },
  ]);
  const [oneModal, setOneModal] = useState(false);
  const [oneProduct, setOneProduct] = useState({});
  return (
    <div className={dark ? "dark" : ""}>
      <header id="home">
        <div className={open ? "modalBack openModal" : "modalBack"}>
          <div className="mobileModal">
            <i
              onClick={() => {
                setOpen(false);
              }}
              className="fa-solid fa-x"
            ></i>
            <ul className="modalLinks">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#featured">FEATURED</a>
              </li>
              <li>
                <a href="#products">PRODUCTS</a>
              </li>
              <li>
                <a href="#">NEW</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={oneModal ? "moreModalBack openMoreModal" : "moreModalBack"}>
          <div className="moreModal">
            <i onClick={()=>{
              setOneModal(false)
            }} className="fa-solid fa-x"></i>
            <div className="imgSide">
              <img src={oneProduct.img} alt="" />
            </div>
            <div className="dataSide">
              <h2>{oneProduct.title}</h2>
              <p>
                Latest arrival of the new imported watches of the B720 series,
                with a modern and resistant design.
              </p>
              <h3>$1050</h3>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="navlinks">
              <img
                src={dark ? "white-logo.svg" : "/logo.svg"}
                className="logo"
                alt=""
              />
              <ul className="links">
                <li>
                  <a className="dark-links lighter-type" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dark-links lighter-type" href="#">
                    Featured
                  </a>
                </li>
                <li>
                  <a className="dark-links lighter-type" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="dark-links lighter-type" href="#">
                    New
                  </a>
                </li>
              </ul>
            </div>
            <div className="navBtns">
              <img
                onClick={() => {
                  setDark(!dark);
                  localStorage.setItem("dark", !dark);
                }}
                src="/moon.svg"
                id="mode"
                alt=""
              />
              <img src="/cart.svg" alt="" />
              <img
                onClick={() => {
                  setOpen(true);
                }}
                src="/bars-light.svg"
                className="bar"
                alt=""
              />
            </div>
            <div className="hero-img">
              <img src="/Home img.png" className="decktop-hero" alt="" />
              <img src="/mobile-hero.png" className="mobile-hero" alt="" />
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="hero-socials">
              <p className="grayer-type">Instagram</p>
              <p className="grayer-type">Twitter</p>
              <p className="grayer-type">Facebook</p>
            </div>
            <div className="hero-text">
              <h1 className="head-title lighter-type">
                NEW WATCH COLLECTIONS B720
              </h1>
              <p className="hero-info grayer-type">
                Latest arrival of the new imported watches of the B720 series,
                with a modern and resistant design.
              </p>
              <h2 className="hero-price">$1245</h2>
              <div className="hero-btns">
                <button className="discover">Discover</button>
                <button className="addBtn grayer-btn">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="featured" className="section1">
          <div className="container">
            <div className="sct-title">
              <h2 className="lighter-type">FEATURED</h2>
            </div>
            <div className="block">
              {db.map((item) => {
                if (item.type === "featured") {
                  return (
                    <div
                      onClick={() => {
                        setOneModal(true);
                        setOneProduct(item);
                      }}
                      className="box box-mode"
                    >
                      <div className="sale">
                        <h2>SALE</h2>
                      </div>
                      <div className="box-img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="box-title">
                        <h2 className="lighter-type">{item.title}</h2>
                        <p className="box-price">{item.price}</p>
                      </div>
                      <div className="box-btn">
                        <button className="addBtn grayer-btn">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <div className="sct-img">
              <img src="/Img story.png" alt="" />
            </div>
            <div className="sct-text">
              <div className="sct-title">
                <h2 className="lighter-type">OUR STORY</h2>
              </div>
              <h1 className="sct2-title lighter-type">
                Inspirational Watch of this year
              </h1>
              <p className="sct2-info grayer-type">
                The latest and modern watches of this year, is available in
                various presentations in this store, discover them now.
              </p>
              <button className="btn">Discover</button>
            </div>
          </div>
        </section>
        <section className="section3" id>
          <div className="container">
            <div className="sct-title">
              <h2 className="lighter-type">PRODUCTS</h2>
            </div>
            <div className="block">
              {db.map((item) => {
                if (item.type === "products") {
                  return (
                    <div onClick={() => {
                      setOneModal(true);
                      setOneProduct(item);
                    }} className="sct3-box box-mode">
                      <div className="box-img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="box-title">
                        <h2 className="lighter-type">{item.title}</h2>
                        <p className="box-price">{item.price}</p>
                      </div>
                      <div className="box-cart grayer-btn">
                        <img src="/white-cart.svg" alt="" />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="container">
            <div className="sct4-text">
              <div className="quote">
                <img src="/Vector.svg" alt="" />
              </div>
              <p className="text-info grayer-type">
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h4 className="date lighter-type">March 27. 2021</h4>
              <div className="user">
                <div className="user-img">
                  <img src="/user.svg" alt="" />
                </div>
                <div className="user-data">
                  <p className="user-name lighter-type">Lee Doe</p>
                  <p className="user-job lighter-type">Director of a company</p>
                </div>
              </div>
              <div className="slide-button">
                <div className="left">
                  <img src="/left.svg" alt="" />
                </div>
                <div className="right">
                  <img src="/right.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="sct4-img">
              <img src="/sct4img.png" alt="" />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="container">
            <div className="sct-title">
              <h2 className="lighter-type">NEW ARRIVALS</h2>
            </div>
            <div className="block">
              {db.map((item) => {
                if (item.type === "featured") {
                  return (
                    <div onClick={() => {
                      setOneModal(true);
                      setOneProduct(item);
                    }} className="sct5-box box-mode">
                      <div className="box-img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="box-title">
                        <h2 className="lighter-type">{item.title}</h2>
                        <p className="box-price">{item.price}</p>
                      </div>
                      <div className="box-btn">
                        <button className="addBtn grayer-btn">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
        <section className="section6">
          <div className="container">
            <div className="subscribe-text">
              <h2>Subscribe Our Newsletter</h2>
              <p>
                Don't miss out on your discounts. Subscribe to our email
                newsletter to get the best offers, discounts, coupons, gifts and
                much more.
              </p>
            </div>
            <div className="subscribe-input">
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="row">
            <h2 className="bolder lighter-type">Our information</h2>
            <p className="grayer-type">1234 - Peru</p>
            <p className="grayer-type">La Libertad 43210</p>
            <p className="grayer-type">123-456-789</p>
          </div>
          <div className="row">
            <h2 className="bolder lighter-type">About Us</h2>
            <p className="grayer-type">Support Center</p>
            <p className="grayer-type">Customer Support</p>
            <p className="grayer-type">About Us</p>
            <p className="grayer-type">Copy Right</p>
          </div>
          <div className="row">
            <h2 className="bolder lighter-type">Product</h2>
            <p className="grayer-type">Road bikes</p>
            <p className="grayer-type">Mountain bikes</p>
            <p className="grayer-type">Electric</p>
            <p className="grayer-type">Accesories</p>
          </div>
          <div className="row">
            <h2 className="bolder lighter-type">Social</h2>
            <div className="socials">
              <i className="fa-brands fa-facebook-f grayer-type"></i>
              <i className="fa-brands fa-twitter grayer-type"></i>
              <i className="fa-brands fa-instagram grayer-type"></i>
            </div>
          </div>
        </div>

        <p className="copy">Bedimcode. All rigths reserved</p>
      </footer>
    </div>
  );
}

export default App;
