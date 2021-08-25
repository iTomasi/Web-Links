import React from "react";

// Components
import FormSection from "components/form/FormSection";

// Types
import { IFormWeb } from "types/Form";

interface IModalHandleWebProps {
    adding: boolean;
    formWeb: IFormWeb;
    setFormWeb: any;
    setShowModal: any;
}

const ModalHandleWeb = ({
    adding,
    formWeb,
    setFormWeb,
    setShowModal,
}: IModalHandleWebProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formWeb);
    };

    const handleOnChange = ({ inputName, theValue }) => {
        return setFormWeb((prev: any) => ({
            ...prev,
            [inputName]: theValue,
        }));
    };

    return (
        <form className="iw_modalHandleWeb" onSubmit={handleSubmit}>
            <div className="iws_content">
                <h2>{adding ? "Agregar nueva pagina" : "Editar pagina"}</h2>

                <FormSection
                    title="Titulo"
                    name="title"
                    value={formWeb.title}
                    onChange={handleOnChange}
                    maxCharacters={40}
                />

                <FormSection
                    title="Link"
                    name="url"
                    value={formWeb.url}
                    onChange={handleOnChange}
                />

                <FormSection
                    type="textarea"
                    title="Descripcion"
                    name="description"
                    value={formWeb.description}
                    onChange={handleOnChange}
                    maxCharacters={150}
                />
            </div>

            <div className="iws_buttons">
                <button type="button" onClick={() => setShowModal(false)}>
                    Cancelar
                </button>
                <button type="submit">Aceptar</button>
            </div>
        </form>
    );
};

export default ModalHandleWeb;
