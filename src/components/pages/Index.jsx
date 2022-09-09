import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductApi } from "../../redux/reducer/productReducer";
import { NavLink } from "react-router-dom";
import Header from "../themes/Header";
import Navbar from "../themes/Navbar";
import Footer from "../themes/Footer";
export default function Index() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductApi());
  },  );

  const renderCarousel = () => {
    return arrProduct.map((item, index) => {
      if (index === 1) {
        return (
          <div className="carousel-item active" key={index}>
            <div className="carousel-item-content">
              <div className="carousel-left">
                <img src={item.image} alt="..." />
              </div>
              <div className="carousel-right">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <NavLink to={`/detail/${item.id}`} className="btn">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="carousel-item" key={index}>
            <div className="carousel-item-content">
              <div className="carousel-left">
                <img src={item.image} alt="..." />
              </div>
              <div className="carousel-right">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <NavLink to={`/detail/${item.id}`} className="btn">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img className="w-100" src={item.image} alt="..." />
            <div className="card-body">
              <h2>{item.name}</h2>
              <p>{item.shortDescription}</p>
            </div>
            <div className="card-footer">
              <NavLink to={`/detail/${item.id}`} className="btn">
                Buy Now
              </NavLink>
              <span>{item.price}$</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <section className="slider">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div id="product-carousel" className="carousel-inner">
              {renderCarousel()}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className="product-feature">
        <div className="container">
          <h1 className="text-center">-Product Feature-</h1>
          <div id="feature" className="row">
            {renderProduct()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
