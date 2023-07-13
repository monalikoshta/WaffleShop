import { ImageCarousal } from "./MultiImageCarousal";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useState } from "react";

const ProductCard = ({ link, title, id, body, price }: ImageCarousal) => {
  const [btnClick, setBtnClick] = useState(false);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: parseInt(id),
        name: title,
        quantity: 1,
        price: price,
        link: link,
      })
    );
    setBtnClick(false);
  };
  const dispatch = useDispatch();
  return (
    // <div className="m-2 w-1/3">
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-[320px] h-full">
      <a href="#!">
        <img
          className="rounded-t-lg w-[1200px] h-[200px]"
          src={link}
          alt={title}
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {body}
        </p>
        <p className="font-bold text-[21px]">
          <span>&#8377;</span> {price}
        </p>
        <button
          type="button"
          className={`inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
          ${
            btnClick
              ? "bg-white text-[#382821] border-[#382821] border-2"
              : "bg-[#382821] text-white "
          }`}
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
    // </div>
  );
};

export default ProductCard;
