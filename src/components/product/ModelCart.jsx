import React from "react";
import TableModelCart from "./TableModelCart";

export default function ModelCart() {
  return (
    <div>
      {/* Modal Body */}
      {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
          role="document"
          style={{ maxWidth: "800px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                style={{ fontWeight: "bold" }}
                className="modal-title text-dark"
                id="modalTitleId"
              >
                Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <TableModelCart />
            </div>
            <div className="modal-footer">
              <button style type="button" className="btn btn-success">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Place to the bottom of scripts */}
    </div>
  );
}
