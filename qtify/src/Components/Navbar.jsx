import React from "react";
// import { Link } from "react-router-dom";
import CustomButton from "../Components/Button";
import Logo from "../Components/Logo";
import styles from "./Navbar.module.css";
import Searchbar from "./Search";


function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar} style={{backgroundColor: '#34c94b'}}>
      <Logo />
      <Searchbar />
      <CustomButton text="Give Feedback" />
    </nav>
  );
}

export default Navbar;
