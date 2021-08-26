import React from "react";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface IFixedAddBtnProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const FixedAddBtn = ({ onClick }: IFixedAddBtnProps) => {
    return (
        <button className="iw_fixedAddBtn" onClick={onClick}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
};

export default FixedAddBtn;
