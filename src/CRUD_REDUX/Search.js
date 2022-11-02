import React from "react";
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Search(props) {
    const { handleChange, handleSearch } = props
    return (
        <>
            <div className="box">
                <div className="container-1">
                    <input type="search" id="search" placeholder="Search..."
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="btn">
                <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
            </div>

        </>
    )
}
export default Search