import "./App.css";
import { useState } from "react";

function App() {
  // Dark mode function
  const [dark, setDark] = useState(localStorage.getItem("dark") ? JSON.parse(localStorage.getItem("dark")) : false);
  return (
    <div className={dark ? "dark" : ""}>
      <header>
        <nav>
          <div className="container">
            <div className="navlinks">
              <img src={dark ? "white-logo.svg" : "public/logo.svg"} className="logo" alt="" />
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
              <img onClick={()=>{
                setDark(!dark);
                localStorage.setItem("dark", !dark);
              }} src="public/moon.svg" id="mode" alt="" />
              <img src="public/cart.svg" alt="" />
              <img src="public/bars-light.svg" className="bar" alt="" />
            </div>
            <div className="hero-img">
              <img src="public/Home img.png" className="decktop-hero" alt="" />
              <img
                src="public/mobile-hero.png"
                className="mobile-hero"
                alt=""
              />
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
        <section className="section1">
          <div className="container">
            <div className="sct-title">
              <h2 className="lighter-type">FEATURED</h2>
            </div>
            <div className="block">
              <div className="box box-mode">
                <div className="sale">
                  <h2>SALE</h2>
                </div>
                <div className="box-img">
                  <img src="public/box1.1.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-btn">
                  <button className="addBtn grayer-btn">ADD TO CART</button>
                </div>
              </div>
              <div className="box box-mode">
                <div className="sale">
                  <h2>SALE</h2>
                </div>
                <div className="box-img">
                  <img src="public/box1.2.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-btn">
                  <button className="addBtn grayer-btn">ADD TO CART</button>
                </div>
              </div>
              <div className="box box-mode">
                <div className="sale">
                  <h2>SALE</h2>
                </div>
                <div className="box-img">
                  <img src="public/box1.3.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-btn">
                  <button className="addBtn grayer-btn">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <div className="sct-img">
              <img src="public/Img story.png" alt="" />
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
        <section className="section3">
          <div className="container">
            <div className="sct-title">
              <h2 className="lighter-type">PRODUCTS</h2>
            </div>
            <div className="block">
              <div className="sct3-box box-mode">
                <div className="box-img">
                  <img src="public/sct3.1.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-cart grayer-btn">
                  <img src="public/white-cart.svg" alt="" />
                </div>
              </div>
              <div className="sct3-box box-mode">
                <div className="box-img">
                  <img src="public/sct3.2.svg" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-cart grayer-btn">
                  <img src="public/white-cart.svg" alt="" />
                </div>
              </div>
              <div className="sct3-box box-mode">
                <div className="box-img">
                  <img src="public/sct3.3.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-cart grayer-btn">
                  <img src="public/white-cart.svg" alt="" />
                </div>
              </div>
              <div className="sct3-box box-mode">
                <div className="box-img">
                  <img src="public/sct3.4.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-cart grayer-btn">
                  <img src="public/white-cart.svg" alt="" />
                </div>
              </div>
              <div className="sct3-box box-mode">
                <div className="box-img">
                  <img src="public/sct3.5.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-cart grayer-btn">
                  <img src="public/white-cart.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="container">
            <div className="sct4-text">
              <div className="quote">
                <img src="public/Vector.svg" alt="" />
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
                  <img src="public/user.svg" alt="" />
                </div>
                <div className="user-data">
                  <p className="user-name lighter-type">Lee Doe</p>
                  <p className="user-job lighter-type">Director of a company</p>
                </div>
              </div>
              <div className="slide-button">
                <div className="left">
                  <img src="public/left.svg" alt="" />
                </div>
                <div className="right">
                  <img src="public/right.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="sct4-img">
              <img src="public/sct4img.png" alt="" />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="container">
            <div className="sct-title">
              <h2 className="lighter-type">NEW ARRIVALS</h2>
            </div>
            <div className="block">
              <div className="sct5-box box-mode">
                <div className="box-img">
                  <img src="public/box1.1.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-btn">
                  <button className="addBtn grayer-btn">ADD TO CART</button>
                </div>
              </div>
              <div className="sct5-box box-mode">
                <div className="box-img">
                  <img src="public/box1.1.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-btn">
                  <button className="addBtn grayer-btn">ADD TO CART</button>
                </div>
              </div>
              <div className="sct5-box box-mode">
                <div className="box-img">
                  <img src="public/box1.1.png" alt="" />
                </div>
                <div className="box-title">
                  <h2 className="lighter-type">JAZZMASTER</h2>
                  <p className="box-price">$1050</p>
                </div>
                <div className="box-btn">
                  <button className="addBtn grayer-btn">ADD TO CART</button>
                </div>
              </div>
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
