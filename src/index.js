import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/sass/style.scss";
// redux
import { store } from "./redux/configStore";
import { Provider } from "react-redux";
import Index from "./components/pages/Index";
import Detail from "./components/pages/Detail";
import Register from "./components/pages/Register";
// page

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index/>}></Route>
        <Route path="index" element={<Index />}></Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
