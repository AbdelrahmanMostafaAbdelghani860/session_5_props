import styles from "./Cart.module.css";
import shoppingCart from "./../../assets/shoppingCart.svg";
import { useState } from "react";

/**
 * EXERCISE
 * Make the drop-down show onClick of the Cart
 * Make the dropdown disappear onMouseLeave of the drop-down itself
 * Make the dropdown disappear when Clear the Cart
 * Show a message of "Empty Cart" when selectedItems.length === 0
 */

const Cart = ({ selectedItems, onClear }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onClickEventHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.cart}>
      <img src={shoppingCart} alt="Shopping Cart" width={25} />
      <div onClick={onClickEventHandler} className={styles.numberOfItems}>
        {selectedItems.length}
      </div>

      {isVisible ? (
        <div
          className={styles.dropDown}
          onMouseLeave={() => {
            setIsVisible(false);
          }}>
          {selectedItems.length === 0 ? (
            <h5 style={{ color: "red" }}> Empty Cart</h5>
          ) : (
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {selectedItems.length > 0 && (
            <button onClick={onClear}>
              {" "}
              <p
                onClick={() => {
                  setIsVisible(false);
                }}>
                CLEAR
              </p>
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
