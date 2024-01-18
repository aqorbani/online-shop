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
    <div className="w-full md:w-1/5 m-2 lg:m-4 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <img src={image} alt={title} className="w-full sm:48 md:h-52 lg:h-56" />
      <h3 className="p-3 text-lime-700 font-bold">{shortenText(title)}</h3>
      <p className="p-2">${price}</p>
      <div className="flex justify-between p-3">
        <Link
          to={`/products/${id}`}
          className="btn"
        >
          <BiMessageSquareDetail />
        </Link>
        <button className="btn">
          <IoBagCheckOutline />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
