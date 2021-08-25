import React from "react";
import { toast } from "react-hot-toast";

interface IFormSectionProps {
    type?: string;
    title: string;
    placeholder?: string;
    maxCharacters?: number;
    value: string;
    name: string;
    onChange: any;
}

const FormSection = ({
    type = "",
    title,
    placeholder,
    maxCharacters = 0,
    value,
    name,
    onChange,
}: IFormSectionProps) => {
    const handleOnChange = (e: any) => {
        const theValue: string = e.target.value;

        if (maxCharacters) {
            if (theValue.length >= maxCharacters)
                return toast.error(
                    `este campo solo puede tener ${maxCharacters} caracteres`
                );
        }

        return onChange({
            inputName: e.target.name,
            theValue,
        });
    };

    return (
        <div className="iw_formSection">
            <label>{title}</label>

            {type.toLowerCase() === "textarea" ? (
                <textarea
                    placeholder={!placeholder ? title + "..." : placeholder}
                    onChange={handleOnChange}
                    value={value}
                    name={name}
                ></textarea>
            ) : (
                <input
                    type="text"
                    placeholder={!placeholder ? title + "..." : placeholder}
                    value={value}
                    onChange={handleOnChange}
                    name={name}
                />
            )}
        </div>
    );
};

export default FormSection;
