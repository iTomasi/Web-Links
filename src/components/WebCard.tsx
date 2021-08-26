import React from "react";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface IWebCardProps {
    id: string;
    title: string;
    url: string;
    description: string;
    hashTags: string[];
}

const WebCard = ({ id, title, url, description, hashTags }: IWebCardProps) => {
    return (
        <div className="iw_webCard">
            <div className="iws_content">
                <h3>{title}</h3>

                <p>{description}</p>

                <div className="iws_hashtags">
                    {hashTags.map((hashTag, index) => (
                        <h5 key={index}>#{hashTag}</h5>
                    ))}
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
