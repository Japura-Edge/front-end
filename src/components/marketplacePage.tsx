import "../assets/marketplacePage.css";
import ProductCard from "./productCard";
import SearchBox from "./searchBox";
import { useState, useEffect } from "react";
import axios from "axios";

const MarketplacePage = ({
  backEndServer,
  updateSearchText,
  newSearchText,
}: any) => {
  //declaring the state variables
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [productsData, setProductsData] = useState([]); // here Im trying to move this state from child componenet to this component
  const [pageinfo, setPageinfo] = useState({
    page: 1,
    min: '',
    max: ''
  });

  //function to get the categories from the backend
  const getCategories = async () => {
    try {
      const response = await axios.get(`${backEndServer}/category`)
      setCategories(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleClick = (value: any) => {
    setPageinfo({ ...pageinfo, page: value });
  };
  
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setPageinfo({ ...pageinfo, [name]: Number(value) });
  };

  const handleSearch = async () => {
    console.log(pageinfo);
    const searchInfo = {
      key: searchText,
      ...pageinfo
    }
    console.log(searchInfo);
    
    try {
      const res = await axios.post(`https://japura-edge-server.azurewebsites.net/product/search`, searchInfo)
      // setProductsData(res.data) // if the productsData state define in this state then it is very easy set the search result like this
      console.log(res.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  //rendering the components
  return (
    <div className="marketplacePage">
      <h1>Marketplace</h1>
      <div className="marketplace-header row">
        <SearchBox 
          updateSearchText={updateSearchText}
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
        <button className="sort-button">Price: Low to High</button>
      </div>
      <div className="marketplace-body row">
        <div className="marketplace-categories column">
          <div className="price-section">
            Price Range
            <div className="price-range row">
              <input type="text" placeholder="min" name='min' onChange={handleChange} />
              to
              <input type="text" placeholder="max" name='max' onChange={handleChange} />
            </div>
          </div>
          <div className="category-section column">
            <h3>Categories</h3>
            {categories.map(
              (category: any) =>
                <a className="category">{category.categoryGroup}</a> &&
                category.subCategory.map((asubCategory: any) => (
                  <a className="category">{asubCategory}</a>
                ))
            )}
          </div>
        </div>
        <div className="marketplace-items column">
          <div className="default-market">
            <ProductCard
              backEndServer={backEndServer}
              searchEnabled="1"
              searchText={newSearchText}
              // productsData={productsData} setProductsData={setProductsData} // transfer state & setters to child component
            />
            <div className="product-page row">
              <button className="prev-page" name='page' onClick={() => handleClick('prev')} >Previous</button>
              <div className="page-numbers row">
                <button className="page-number" name='page' onClick={() => handleClick(1)} >1</button>
                <button className="page-number" name='page' onClick={() => handleClick(2)} >2</button>
              </div>
              <button className="next-page" name='page' onClick={() => handleClick('next')} >Next</button>
            </div>
          </div>
          <h2>Recommended for You</h2>
          <div className="recommend-market">
            <ProductCard backEndServer={backEndServer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
