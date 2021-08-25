import React from "react";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faSortAlphaDownAlt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="iw_header">
            <label className="iws_search">
                <div className="iws_icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>

                <input type="text" placeholder="Buscar" />
            </label>

            <div className="iws_buttons">
                <div className="iws_icon">
                    <FontAwesomeIcon icon={faSortAlphaDownAlt} />
                </div>
            </div>
        </header>
    );
};

export default Header;
