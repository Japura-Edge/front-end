import "../assets/homePage.css";
import BestSelling from "./bestSelling";
import Categories from "./categories";
import SearchBox from "./searchBox";
import UserBase from "./userbase";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = ({ backEndServer }: any) => {
  //declaring the state variables
  const [categoryGroups, setCategoryGroups] = useState([]);
  const [faculties, setFaculties] = useState([]);

  //function to get the categories from the backend
  const getCategoryGroups = async () => {
    try {
      const response = await axios.get(`${backEndServer}/category`);
      setCategoryGroups(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //function to get the faculties from the backend
  const getFaculties = async () => {
    try {
      const response = await axios.get(`${backEndServer}/faculty`);
      setFaculties(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryGroups();
    getFaculties();
  }, []);

  //rendering the components
  return (
    <div className="homePage row" id="#home">
      {/* Banner section */}
      <div className="home-banner">
        <img
          src="./images/banner.png"
          alt="banner"
          className="home-banner-back"
        />
        <div className="home-search">
          <SearchBox />
        </div>
        <img
          src="./images/banner-image.png"
          alt="banner"
          className="banner-image"
        />
      </div>
      <Categories categoryList={categoryGroups} />

      {/* What is Japura Edge section */}
      <div className="home-introduction row">
        <img src="./images/logo-inverted.png" alt="Japura Edge logo" />
        <div className="home-introduction-text">
          <h1>What is Japura Edge</h1>
          <p>
            Japura Edge is the one and only online platform that connects the
            entrepreneurs and the freelancers of the University of Sri
            Jayewardenepura. This platform is designed to help the students to
            offer their services to the society. Exclusive for the students of
            the <span>University of Sri Jayewardenepura</span>.
          </p>
        </div>
      </div>

      {/* Why Japura Edge section */}
      <div className="home-why column">
        <h1>Why Japura Edge</h1>
        <div className="home-why-cards row">
          <div className="home-why-card column">
            <i className="fa fa-diamond"></i>
            <h2>Totally Free Platform</h2>
          </div>
          <div className="home-why-card column">
            <i className="fa fa-graduation-cap"></i>
            <h2>Exclusive for USJP</h2>
          </div>
          <div className="home-why-card column">
            <i className="fa fa-users"></i>
            <h2>Little to none competition</h2>
          </div>
          <div className="home-why-card column">
            <i className="fa fa-check-square"></i>
            <h2>Guaranteed Satisfactory</h2>
          </div>
          <div className="home-why-card column">
            <i className="fa fa-plus"></i>
            <h2>Promote Entrepreneurship</h2>
          </div>
        </div>
      </div>

      {/* Userbase section */}
      <UserBase facultyList={faculties} />

      {/* BEst Selling section */}
      <BestSelling backEndServer={backEndServer} />
    </div>
  );
};

export default HomePage;
