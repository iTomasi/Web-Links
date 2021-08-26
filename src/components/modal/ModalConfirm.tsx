import React from "react";

interface IModalConfirmProps {
    title: string;
    description: string;
    onClickAccept: React.MouseEventHandler<HTMLButtonElement>;
    setShowModal: any;
}

const ModalConfirm = ({
    title,
    description,
    onClickAccept,
    setShowModal,
}: IModalConfirmProps) => {
    return (
        <div className="iw_modalConfirm">
            <div className="iws_content">
                <h3>{title}</h3>

                <p>{description}</p>
            </div>

            <div className="iws_buttons">
                <button type="button" onClick={() => setShowModal(false)}>
                    Cancelar
                </button>
                <button
                    className="iws_accept-btn"
                    type="button"
                    onClick={onClickAccept}
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default ModalConfirm;
