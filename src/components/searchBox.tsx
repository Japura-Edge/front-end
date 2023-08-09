import { useEffect, useState } from "react";
import "../assets/searchBox.css";

const SearchBox = ({ updateSearchText }: any) => {
  //declaring the state variables
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateSearchText(searchText);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  //handle the search text change
  const handleSearchTextChange = (event: any) => {
    setSearchText(event.target.value);
  };

  //rendering the components
  return (
    <div className="search-box row">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <button className="fa fa-search"></button>
    </div>
  );
};

export default SearchBox;
