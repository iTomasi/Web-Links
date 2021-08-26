import React, { useRef } from "react";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface IFormHashTagsProps {
    hashTags: string[];
    removingTag: any;
    inputValue: any;
}

const FormHashTags = ({
    hashTags,
    removingTag,
    inputValue,
}: IFormHashTagsProps) => {
    const inputRef = useRef(null);

    const handleTimes = (name: string) => {
        const filtering = hashTags.filter((hashTag) => hashTag !== name);

        return removingTag(filtering);
    };

    const handleKeyPressInput = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            inputValue(e.target.value);

            return (inputRef.current.value = null);
        }
    };

    return (
        <div className="iw_formHashTags">
            <label className="iws_title">Tags</label>

            <label className="iws_input">
                {hashTags.map((hashTag, index) => (
                    <span key={index}>
                        <label>#{hashTag} </label>
                        <FontAwesomeIcon
                            className="iws_icon"
                            icon={faTimes}
                            onClick={() => handleTimes(hashTag)}
                        />
                    </span>
                ))}

                <input
                    ref={inputRef}
                    type="text"
                    onKeyPress={handleKeyPressInput}
                />
            </label>
        </div>
    );
};

export default FormHashTags;
