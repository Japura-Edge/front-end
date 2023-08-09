import "../assets/marketplacePage.css";
import ProductCard from "./productCard";
import SearchBox from "./searchBox";
import { useState, useEffect } from "react";
import axios from "axios";

const MarketplacePage = ({ backEndServer }: any) => {
  //declaring the state variables
  const [categories, setCategories] = useState([]);

  //function to get the categories from the backend
  const getCategories = async () => {
    try {
      const response = await axios.get(`${backEndServer}/category`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  //rendering the components
  return (
    <div className="marketplacePage">
      <h1>Marketplace</h1>
      <div className="marketplace-header row">
        <SearchBox />
        <button className="sort-button">Price: Low to High</button>
      </div>
      <div className="marketplace-body row">
        <div className="marketplace-categories column">
          <div className="price-section">
            Price Range
            <div className="price-range row">
              <input type="text" placeholder="min" />
              to
              <input type="text" placeholder="max" />
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
            <ProductCard backEndServer={backEndServer} />
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
