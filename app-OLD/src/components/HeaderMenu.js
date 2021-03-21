import momsLogo from "../icons/4momsIcon.png";
import Country from "./Country.js";
import { FiSearch } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Search from "./Search-Bar/Search.js";
import { useState } from "react";

import { Link } from "react-router-dom";


const mobile = window.innerWidth < 800 ? true : false;

export default function HeaderMenu(){

  const [ showSearch, setShowSearch ] = useState(false);

  return (
    <>
    { !mobile
        ?
          !showSearch
            ?
              <div className = "header-menu">

                <div>
                  <span className = "header-shop">Shop</span>
                  <Link to = "/about" className = "header-shop">About 4moms</Link>
                </div>

                <Link className = "header-main-icon" to = "/">
                  <img src = { momsLogo } alt = "4momsLogo"/>
                </Link>

                <span className = "header-menu-right">
                  <span style = {{width: "11rem"}}>
                    <Country />
                  </span>
                  <span>
                    Support
                  </span>
                  <FiSearch 
                    className = "icons"
                    onClick = { () => setShowSearch(true) }
                  />
                  <BiUserCircle className = "icons" />
                  <FiShoppingCart className = "icons" />
                </span>
                
              </div>
            :
              <Search onCloseSearch = {() => setShowSearch(false)}/>
        : console.log("render mobile screen")
    }
    </>
  );
}