import React from "react";
import Header from "../themes/Header";
import Navbar from "../themes/Navbar";
import Footer from "../themes/Footer";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailProductApi } from "../../redux/reducer/productReducer";
export default function Detail() {
  const { detailProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(detailProduct);
  useEffect(() => {
    let { id } = params;
    dispatch(getDetailProductApi(id));
  }, [params.id]);

  const renderDetailProduct = () => {
    return (
      <div class="Detail-crs">
        <div className="img-product">
          <img src={detailProduct.image} alt="..." />
        </div>
        <div className="Product__Detail__right">
          <div className="Product__Item">
            <h1>{detailProduct.name}</h1>
          </div>
          <div className="Product__Item">
            <p>{detailProduct.description}</p>
          </div>
          <div className="Product__Item">
            <h2>{detailProduct.alias}</h2>
          </div>
          <div className="Product__Item1">
            {detailProduct.size?.map((size, index) => {
              return (
                <div class="item-number" key={index}>
                  <button>{size}</button>
                </div>
              );
            })}
          </div>
          <div className="Product__Item">
            <p className="Item-monney">{detailProduct.price}$</p>
          </div>
          <div className="Product__Item__Button">
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <div className="Product__Item__Button2">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  };

  const renderRelateProduct = () => {
    return detailProduct.relatedProducts?.map((item, index) => {
      return (
        <div class="col-4 mt-5">
          <div class="card">
            <img class="w-100" src={item.image} alt="..." />
            <div class="card-body">
              <h2>{item.name}</h2>
              <p>{item.shortDescription.slice(0, 30) + "..."}</p>
            </div>
            <div class="card-footer">
              <NavLink className="btn" to={`/detail/${item.id}`} class="btn">
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
      <section class="Product__Detail">
        <div class="container">
          <div id="detail">{renderDetailProduct()}</div>
        </div>
      </section>
      <section class="Relate__Product">
        <div class="container">
          <div class="Relate__text text-center">
            <h1>-Realate Product -</h1>
          </div>
          <div id="relate" class="row">
            {renderRelateProduct()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
