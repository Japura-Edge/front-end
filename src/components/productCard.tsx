import "../assets/productCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({
  backEndServer,
  searchText = "",
  setProductsData    // if productsData state define in above component
}: any) => {
  //declaring the state variables
  const [productsData, setLocalProductsData] = useState([]);
  const [userData, setUserData] = useState([]);
  var user: any;

  // fetching the product data from the database using axios
  const getProductsData = async () => {
    try {
      const response = await axios.get(`https://japura-edge-server.azurewebsites.net/product`)
      setLocalProductsData(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  //fetching user data from the database
  const getUserData = async () => {
    try {
      const response = await axios.get(`${backEndServer}/user`);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //get data of the specific user
  const getUser = (product: any) => {
    var selecteduser = userData.find(
      (item: any) => item.userName === product.userName
    );
    return selecteduser;
  };

  useEffect(() => {
    getProductsData();
    getUserData();
  }, [searchText]);

  // update the parent component's state when the local state changes
  useEffect(() => {
    () => {setProductsData(productsData)};
  }, [productsData, setProductsData]);

  // rending the product card
  return (
    <div className="product-cards row">
      {productsData.map(
        (product: any) => (
          (user = getUser(product)),
          user ? (
            <a href="" key={product._id}>
              <div className="product-card column">
                <div className="product-card-image-carousel">
                  <img src={product.gallery[0]} alt="product" />
                </div>
                <div className="product-card-title">{product.productName}</div>
                <div className="product-card-price-container row">
                  <div className="product-card-price">Rs.{product.price}</div>
                  <a href="">
                    <div className="product-fav-count">
                      <i className="fa fa-heart-o"></i>
                      {0}
                    </div>
                  </a>
                </div>
                <div className="product-card-user row">
                  <img
                    src={user?.profilePic}
                    alt="user-profile"
                    className="product-card-user-image"
                  />
                  <div className="product-card-user-name-section column">
                    <h4>
                      {user?.firstName}
                      {user?.lastName}
                    </h4>
                    <div className="product-card-user-level">
                      {user?.userLevel}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ) : null
        )
      )}
    </div>
  );
};

export default ProductCard;
