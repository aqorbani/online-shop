import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.object,
  };

  return (
    <>
      <header className="flex justify-between p-2 m-2 bg-white border border-gray-200 rounded-lg shadow">
        <Link className="sign">Online Shop</Link>
        <Link className="btn">
          <HiMiniShoppingCart />
        </Link>
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
