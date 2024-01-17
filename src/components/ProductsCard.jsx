import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { shortenText } from "../helpers/helper";

const ProductsCard = ({ data }) => {
  ProductsCard.propTypes = {
    data: PropTypes.any,
  };
  const { id, title, image, price } = data;
  return (
    <div className="bg-white w-full md:w-1/4 p-3 m-5 rounded border-lime-600 border-dotted border-2 overflow-hidden">
      <img src={image} alt={title} className="w-full h-60" />
      <h3 className="p-3 text-lime-700 font-bold">{shortenText(title)}</h3>
      <p className="p-2">${price}</p>
      <div className="flex justify-between p-3">
        <Link
          to={`/products/${id}`}
          className="p-3 bg-lime-900 text-white font-extrabold rounded text-xl"
        >
          <BiMessageSquareDetail />
        </Link>
        <button className="p-3 bg-lime-900 text-white font-extrabold rounded text-xl">
          <IoBagCheckOutline />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
