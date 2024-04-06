import "./Header.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const sideNav = useRef();
  const [menuOpened, setmenuOpened] = useState(false);

  const toggleNav = (e) => {
    // sideNav.current.style.display = "none" ? sideNav.current.style.display = "block" :sideNav.current.style.display = "none" ;
    setmenuOpened(!menuOpened);
  };

  return (
    <div className="header poppins-light">
      <nav className="first-nav">
        <div>
          <span className="bar-svg">
            <svg
              onClick={toggleNav}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </span>
          <span className="logo-span">
            <img
              src="https://99pancakes.in/cdn/shop/files/Screenshot_2023-01-30_at_1.02.24_PM-removebg-preview.png?v=1675247326"
              alt="Logo"
            />
          </span>
          <span className="searchbar-span">
            <span className="searchbar">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for...."
                name="search"
                id="searchBar"
              />
            </span>
          </span>
          <span className="btn-span">
            <button className="accBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="accSvg"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
              <p style={{ fontSize: "1rem" }}>Account</p>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{ fill: "white", width: "1.7rem" }}
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              Rs. 0.00 (0)
            </button>
          </span>
          <span className="cart-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </span>
        </div>
      </nav>
      <nav className="link-nav">
        <div className="link-div">
          <Link>About Us</Link>
          <Link>Products</Link>
          <Link className="ctaLink">Order Online</Link>
          <Link>Book An Event</Link>
          <Link>Franchise</Link>
          <Link>Locations</Link>
          <Link>Careers</Link>
          <Link>Contact Us</Link>
          <Link>Partner Login</Link>
        </div>
        <span className="searchbar-mobile">
          <span className="searchbar">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for...."
              name="search"
              id="searchBar"
            />
          </span>
        </span>
      </nav>
      {menuOpened && (
        <div className="side-nav" id="sideNav" ref={sideNav}>
          <p className="menu-header">
            Menu
            <svg
              onClick={toggleNav}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              style={{
                fill: "black",
                zIndex: "101",
                width: "1.4rem",
                cursor: "pointer",
              }}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </p>
          <Link>About Us</Link>
          <Link>Products</Link>
          <Link className="ctaLink">Order Online</Link>
          <Link>Book An Event</Link>
          <Link>Franchise</Link>
          <Link>Locations</Link>
          <Link>Careers</Link>
          <Link>Contact Us</Link>
          <Link>Partner Login</Link>
          <Link className="Acc-Btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              style={{ width: "1.1rem" }}
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
            Account
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
