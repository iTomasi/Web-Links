import React from "react";

interface IModalContainerProps {
    show: boolean;
    setShow: any;
    children: React.ReactNode;
}

const ModalContainer = ({ show, setShow, children }: IModalContainerProps) => {
    const handleModal = (e: any) => {
        if (e.target.classList.contains("iw_modalContainer"))
            return setShow(false);
    };

    return (
        <div
            className="iw_modalContainer"
            style={{ display: show ? "flex" : "none" }}
            onClick={handleModal}
        >
            {children}
        </div>
    );
};

export default ModalContainer;
