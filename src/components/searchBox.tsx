import "../assets/searchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box row">
      <input type="text" placeholder="Search" />
      <button className="fa fa-search"></button>
    </div>
  );
};

export default SearchBox;
