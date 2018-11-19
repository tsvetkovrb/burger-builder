import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.css";

const CheckoutSummary = ({ ingredients }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Я надеюсь, что это вкусно</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button clicked btnType="Danger">
        ОТМЕНА
      </Button>
      <Button clicked btnType="Success">
        ПРОДОЛЖИТЬ
      </Button>
    </div>
  );
};

export default CheckoutSummary;
