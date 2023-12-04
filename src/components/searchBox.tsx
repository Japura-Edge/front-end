import "../assets/searchBox.css";

const SearchBox = ({ searchText, setSearchText, handleSearch }: any) => {
  // const SearchBox = ({ updateSearchText, searchText, setSearchText, handleSearch}: any) => {
  //declaring the state variables

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     updateSearchText(searchText);
  //   }, 400);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchText]);

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
      <button className="fa fa-search" onClick={handleSearch}></button>
    </div>
  );
};

export default SearchBox;
