import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductsCard = ({ data }) => {
  ProductsCard.propTypes = {
    data: PropTypes.any,
  };
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();
  console.log(state);

  const [quantity,setquantity]=useState(productQuantity(state, id))

  

  const clickHandler = async(type) => {
    await dispatch({ type, payload: data });
    setquantity(productQuantity(state, id))
  };

  return (
    <div className="w-full md:w-1/5 m-2 lg:m- p-3 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      <img src={image} alt={title} className="w-full sm:48 md:h-52 lg:h-56" />
      <h3 className="p-3 text-lime-700 font-bold">{shortenText(title)}</h3>
      <p className="p-2">${price}</p>
      <div className="flex justify-between p-3">
        <Link to={`/products/${id}`} className="btn">
          <BiMessageSquareDetail />
        </Link>
        {quantity === 1 && (
          <button className="btn" onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdOutlineDeleteForever />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn" onClick={() => clickHandler("DECREASE")}>
            <FaMinus />
          </button>
        )}
        {!!quantity && <span>{quantity}</span>}
        {quantity === 0 ? (
          <button className="btn" onClick={() => clickHandler("ADD_ITEM")}>
            <IoBagCheckOutline />
          </button>
        ) : (
          <button className="btn" onClick={() => clickHandler("INCREASE")}>
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
