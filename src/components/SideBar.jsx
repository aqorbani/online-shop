/* eslint-disable react/no-unescaped-entities */
import { BiSolidCategory } from "react-icons/bi";
import { createQueryObject } from "../helpers/helper";
import PropTypes from "prop-types";

const SideBar = ({ setQuery }) => {
  SideBar.propTypes = {
    setQuery: PropTypes.func,
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLocaleLowerCase();
    if (tagName === "LI" || tagName === "OPTION") {
      setQuery((query) => createQueryObject(query, { category }));
    } else return;
  };
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex p-1">
          <BiSolidCategory />
          <p>Categories</p>
        </div>
        <div>
          <ul className="cursor-pointer" onClick={(e) => categoryHandler(e)}>
            <li>All</li>
            <li>electronics</li>
            <li>jewelery</li>
            <li>men's clothing</li>
          </ul>
        </div>
      </div>
      <select
        className="md:hidden w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-800"
        onClick={(e) => categoryHandler(e)}
      >
        <option>All</option>
        <option>electronics</option>
        <option>jewelery</option>
        <option>men's clothing</option>
      </select>
    </div>
  );
};

export default SideBar;
