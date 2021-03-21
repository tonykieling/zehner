/**
 Component to manage and output the Country's Menu
*/

import { useState } from "react";
import "./menu.css";

const options = [
  {
    country : "United States",
    hRefy   : "us"
  },
  {
    country : "Canada",
    hRefy   : "ca"
  },
  {
    country : "United Kingdom",
    hRefy   : "uk"
  }
];


export default function MenuButton() {

  const [country, setCountry] = useState(options[0].country);

  const [showMenu, setShowMenu] = useState("dropdown-content-no-show");

  const onCountryChange = newCountry => {
    setCountry(newCountry);
    setShowMenu("dropdown-content-no-show");
  };

  return (
    <>
      <div className="dropdown">
        <div onClick= { () => setShowMenu("dropdown-content") } className="dropbtn"> { country } </div>

        <div id="myDropdown" className = { showMenu }>
          { options.map((e, i) =>
            <a 
              key     = { i }
              href    = {`#${e.hRefy}`}
              onClick = { () => onCountryChange(e.country)}
            > { e.country } </a>
          )}
        </div>
      </div>
    </>
  )
};