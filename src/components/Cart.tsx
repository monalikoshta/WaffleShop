import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  decrementCount,
  emptyCart,
  incrementCount,
  removeFromCart,
} from "../store/cartSlice";
import { useState } from "react";
import CartAddress from "./CartAddress";

type Props = { display: boolean; toggleDisplay: any };
const Cart = ({ display, toggleDisplay }: Props) => {
  const cartValues = useSelector((state: RootState) => state.cart.value);
  const itemTotal = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  const [orderId, setOrderID] = useState(101);
  // let submitClicked: boolean = true;

  const alertOrderID = () => {
    alert("Order placed sucessfully - Order ID WS" + orderId);
    setOrderID(orderId + 1);
    dispatch(emptyCart());
  };

  const calGrandTotal = () => {
    return (itemTotal * 1.05 + (cartValues.length == 0 ? 0 : 50)).toFixed(2);
  };

  // console.log(cartValues);
  return (
    <div
      className={`bg-[#E9E7EA] text-black w-[550px] p-4 max-h-[92vh] overflow-auto ease-in-out z-10 fixed right-0 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${
        display ? "block min-h-fit" : "hidden"
      }`}
    >
      <div className="pb-4 text-center w-full h-14">
        <h1 className="text-4xl font-Diphylleia font-bold">Cart</h1>
        <button
          className="material-symbols-outlined relative bottom-[26px] left-[248px] hover:drop-shadow-2xl hover:font-bold"
          onClick={toggleDisplay}
        >
          close
        </button>
      </div>
      {cartValues.length == 0 ? (
        <div className="text-center text-neutral-600 font-bold mt-4 max-h-[92vh]">
          {" "}
          Oops there are no items added. Please add some
        </div>
      ) : (
        <div>
          <div>
            <div className="w-full text-center border-b-[1px] h-1 mx-2 pt-2 border-neutral-400 mb-4">
              <span className="bg-[#E9E7EA] relative bottom-3 px-4">
                Item(s) Added
              </span>
            </div>
            <div
            // className="overflow-auto h-[264px]"
            >
              {cartValues.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-row justify-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row mb-4 h-16"
                  >
                    <img
                      className="rounded-t-lg object-cover h-auto w-24 md:rounded-none md:rounded-l-lg"
                      src={item.link}
                      alt=""
                    />
                    <div className="flex items-center justify-between p-6 w-full">
                      <div className="text-xl font-medium text-neutral-800 ">
                        {item.name}
                      </div>

                      <div className="text-lg text-neutral-600 ">
                        <span className="mr-6">
                          <span>&#8377;</span>
                          {item.price}
                        </span>
                        <button
                          className="bg-[#382821] text-white px-2 rounded-full"
                          onClick={() => dispatch(decrementCount(item.id))}
                        >
                          -
                        </button>
                        {"  "}
                        {item.quantity}{" "}
                        <button
                          className="bg-[#382821] text-white px-2 rounded-full"
                          onClick={() => dispatch(incrementCount(item.id))}
                        >
                          +
                        </button>
                        <button
                          className="material-symbols-outlined ml-4 hover:font-bold relative top-1"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          close
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-end w-full">
            <div>
              <div className="w-full text-center border-b-[1px] h-1 mx-2 pt-2 border-neutral-400">
                <span className="bg-[#E9E7EA] relative bottom-3 px-4">
                  {" "}
                  Delivery Address
                </span>
              </div>
            </div>
            <CartAddress />
            <div>
              <div className="w-full text-center border-b-[1px] h-1 mx-2 pt-2 mb-5 border-neutral-400">
                <span className="bg-[#E9E7EA] relative bottom-3 px-4">
                  Bill Summary
                </span>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row w-full">
                <div className="flex justify-between text-neutral-700 font-semibold">
                  <span>Subtotal</span>
                  <span>
                    <span>&#8377;</span>
                    {itemTotal}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-neutral-700">
                  <span>GST(5%)</span>
                  <span>
                    <span>&#8377;</span>
                    {(itemTotal * 0.05).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-neutral-700">
                  <span>Restaurant packing charges</span>
                  <span>
                    <span>&#8377;</span>
                    {cartValues.length == 0 ? 0 : 20.0}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-neutral-700">
                  <span>Delivery charges</span>
                  <span>
                    <span>&#8377;</span>
                    {cartValues.length == 0 ? 0 : 30.0}
                  </span>
                </div>
                <hr className="h-1 text-neutral-700 mt-2"></hr>
                <div className="flex justify-between text-sm text-neutral-700 font-semibold">
                  <span>Grand Total</span>
                  <span>
                    <span>&#8377;</span>
                    {calGrandTotal()}
                  </span>
                </div>
                <div>
                  <button
                    className="bg-[#382821] text-white rounded w-full p-2 mt-3"
                    onClick={
                      () => alertOrderID()
                      // alert("")
                    }
                  >
                    Place order - Total <span>&#8377;</span>
                    {calGrandTotal()}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
