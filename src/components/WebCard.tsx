import React from "react";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const WebCard = () => {
    return (
        <div className="iw_webCard">
            <div className="iws_content">
                <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corrupti, autem.
                </h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquid, cum.
                </p>

                <div className="iws_hashtags">
                    <h5>#testt</h5>
                    <h5>#asdaksdkasdjaksdj</h5>
                    <h5>#tomassss</h5>
                </div>
            </div>

            <div className="iws_icons">
                <FontAwesomeIcon className="iws_iconEdit" icon={faEdit} />
                <FontAwesomeIcon className="iws_iconTrash" icon={faTrash} />
            </div>
        </div>
    );
};

export default WebCard;
