import React, { useEffect, useState } from "react";

function Cart({ cart, changeQuantity }) {
    const [total, setTotal] = useState() 
    useEffect(() => {
        let price = 0
        cart.forEach((item) => {
            price += +(item.salePrice || item.originalPrice).toFixed(2)
        })
        setTotal()
    })

    const total = () => {
        return price 
    }
    const subTotal =  () => {
        
    }
  return (
    <div id="books__body">
      <main id="book__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="csrt__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <san className="cart__book--price">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </san>
                          <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantity(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}{" "}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__subtotal">
                <span>Subtotal</span>
                <span>$11</span>
              </div>
              <div className="total__item total__tax">
                <span>tax</span>
                <span>$1.29</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${total()} </span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert(`Never did dis ;P`)}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
