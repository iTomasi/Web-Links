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
    getDataEdit: any;
    getDataRemove: any;
}

const WebCard = ({
    id,
    title,
    url,
    description,
    hashTags,
    getDataEdit,
    getDataRemove,
}: IWebCardProps) => {
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
                <FontAwesomeIcon
                    className="iws_iconEdit"
                    icon={faEdit}
                    onClick={() => {
                        return getDataEdit({
                            _id: id,
                            title,
                            url,
                            description,
                            hashTags,
                        });
                    }}
                />
                <FontAwesomeIcon
                    className="iws_iconTrash"
                    icon={faTrash}
                    onClick={() => {
                        return getDataRemove({
                            _id: id,
                            title,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default WebCard;
