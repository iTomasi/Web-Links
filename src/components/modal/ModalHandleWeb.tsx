import React from "react";
import { toast } from "react-hot-toast";

// Components
import FormSection from "components/form/FormSection";
import FormHashTags from "components/form/FormHashTags";

// Types
import { IFormWeb } from "types/Form";

// Axios
import insertWeb from "axiosSrc/web/insertWeb";

// Redux
import { useDispatch } from "react-redux";
import { pushWebArray } from "reduxSrc/web/webState";

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
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        if (adding) {
            const { error, data } = await insertWeb({
                title: formWeb.title,
                url: formWeb.url,
                description: formWeb.description,
                hashTags: formWeb.hashTags,
            });

            if (error) return toast.error(error);

            const payload = pushWebArray(data);

            dispatch(payload);

            toast.success("Website added succesfully");

            setShowModal(false);
        }
    };

    const handleOnChange = ({ inputName, theValue }) => {
        return setFormWeb((prev: any) => ({
            ...prev,
            [inputName]: theValue,
        }));
    };

    const handleHashTags = (newArray: string[]) => {
        return setFormWeb((prev: any) => ({
            ...prev,
            hashTags: newArray,
        }));
    };

    const handleHashTagsPush = (value: string) => {
        return setFormWeb((prev: any) => ({
            ...prev,
            hashTags: [...prev.hashTags, value],
        }));
    };

    return (
        <div className="iw_modalHandleWeb">
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

                <FormHashTags
                    hashTags={formWeb.hashTags}
                    removingTag={handleHashTags}
                    inputValue={handleHashTagsPush}
                />
            </div>

            <div className="iws_buttons">
                <button type="button" onClick={() => setShowModal(false)}>
                    Cancelar
                </button>
                <button type="button" onClick={handleSubmit}>
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default ModalHandleWeb;
