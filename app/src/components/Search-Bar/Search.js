import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./search.css";


export default function Search({ onCloseSearch }) {

  const [text, setText] = useState("");

  const [redirectPage, setRedirectPage] = useState(false);

  useEffect(() => {
    return () => onCloseSearch();
    // eslint-disable-next-line
  }, [redirectPage]);

  const runSearch = () => {
    setRedirectPage(true);
  };

  return(
    <>
      { redirectPage && <Redirect to = {{pathname: "/search", state: text}}/>}
      <div className = "header-menu">
        <FiSearch />
        <input
          id = "text"
          autoFocus
          type = "text"
          value = { text }
          placeholder = "Search..."
          className = "search-setting"
          style = {{borderBottom: "1px solid black"}}
          onChange = { e => setText(e.target.value) }
          onKeyDown = { e => e.key === "Enter" && runSearch(text)}
        />
        <CgClose onClick = { () => onCloseSearch()}/>
      </div>
    </>
  );
}
