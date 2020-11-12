import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
function SubTotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (0 items): <strong>0</strong>{" "}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Procced To Checkbox</button>
    </div>
  );
}

export default SubTotal;
