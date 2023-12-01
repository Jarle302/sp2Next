import { IoSearchCircleSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <search>
      <form action="">
        <div className="flex">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button className="bg-red-200 text-gray-600 w-[57pxpx] p-[4px]">
            <IoSearchCircleSharp />
            Search
          </button>
        </div>
      </form>
    </search>
  );
};

export default Searchbar;
