import React from "react";

export default function TableModelCart() {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>
            <i style={{ cursor: "pointer" }} class="fa-solid fa-x"></i>
            <i style={{ cursor: "pointer" }} class="fa-solid fa-heart ms-3"></i>
          </td>
          <td>
            <img src="" alt="..." />
          </td>
          <td>Prophere </td>
          <td>
            <button className="btn btn-secondary me-2">+</button>1
            <button className="btn btn-secondary ms-2">-</button>
          </td>
          <td>450$</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" className="text-end">
            <span className="fw-bold">
              Total Price: <span className="text-danger">450$</span>
            </span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
