import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// Components
import WebCard from "components/WebCard";
import ModalContainer from "components/modal/ModalContainer";
import ModalHandleWeb from "components/modal/ModalHandleWeb";
import ModalConfirm from "components/modal/ModalConfirm";
import FixedAddBtn from "components/FixedAddBtn";

// Types
import { IFormWeb } from "types/Form";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { updateInitialValues, removingWebPage } from "reduxSrc/web/webState";

// Axios
import removeWebFunc from "axiosSrc/web/removeWeb";

const formWebInitialValue: IFormWeb = {
    _id: "",
    title: "",
    url: "",
    description: "",
    hashTags: [],
};

const Index = () => {
    const webs: any = useSelector((state: any) => state.web);
    const filter: any = useSelector((state: any) => state.filter);
    const dispatch = useDispatch();

    const [formWeb, setFormWeb] = useState<IFormWeb>(formWebInitialValue);
    const [removeWeb, setRemoveWeb] = useState({
        _id: "",
        title: "",
    });

    const [isAdding, setIsAdding] = useState<boolean>(true);
    const [showModalForm, setShowModalForm] = useState<boolean>(false);
    const [showModalRemove, setShowModalRemove] = useState<boolean>(false);

    useEffect(() => {
        const effectFunc = async () => {
            const data = await updateInitialValues();

            dispatch(data);
        };

        effectFunc();
    }, []);

    const getDataEdit = (payload: IFormWeb) => {
        setIsAdding(false);
        setFormWeb(payload);
        setShowModalForm(true);
    };

    const getDataRemove = (payload) => {
        setRemoveWeb(payload);
        setShowModalRemove(true);
    };

    const handleModalRemovePageBtn = async () => {
        const { error } = await removeWebFunc(removeWeb._id);

        if (error) return toast.error(error);

        toast.success("Pagina eliminada correctamente");

        const payload = removingWebPage({
            webId: removeWeb._id,
            originalWebs: webs.originalWebs,
            websArray: webs.webs,
        });

        dispatch(payload);
        setShowModalRemove(false);
    };

    return (
        <>
            <div className="iw_home">
                <div className="iws_grid">
                    {webs.webs.map((web: any, index: any) => {
                        if (filter.value.startsWith("#")) {
                            const findIndex = web.hashTags.findIndex(
                                (hashTag: any) =>
                                    hashTag.includes(filter.value.substring(1))
                            );

                            if (findIndex !== -1) {
                                return (
                                    <WebCard
                                        key={index}
                                        id={web._id}
                                        description={web.description}
                                        hashTags={web.hashTags}
                                        title={web.title}
                                        url={web.url}
                                        getDataEdit={getDataEdit}
                                        getDataRemove={getDataRemove}
                                    />
                                );
                            }
                        } else if (
                            web.title.toLowerCase().includes(filter.value) ||
                            web.description.toLowerCase().includes(filter.value)
                        ) {
                            return (
                                <WebCard
                                    key={index}
                                    id={web._id}
                                    description={web.description}
                                    hashTags={web.hashTags}
                                    title={web.title}
                                    url={web.url}
                                    getDataEdit={getDataEdit}
                                    getDataRemove={getDataRemove}
                                />
                            );
                        }
                    })}
                </div>
            </div>

            <FixedAddBtn
                onClick={() => {
                    setIsAdding(true);
                    setFormWeb(formWebInitialValue);
                    setShowModalForm(true);
                }}
            />

            <ModalContainer show={showModalForm} setShow={setShowModalForm}>
                <ModalHandleWeb
                    formWeb={formWeb}
                    setFormWeb={setFormWeb}
                    adding={isAdding}
                    setShowModal={setShowModalForm}
                />
            </ModalContainer>

            <ModalContainer show={showModalRemove} setShow={setShowModalRemove}>
                <ModalConfirm
                    setShowModal={setShowModalRemove}
                    title="Eliminar pagina"
                    description={`Estas seguro que quieres remover la pagina '${removeWeb.title}'`}
                    onClickAccept={handleModalRemovePageBtn}
                />
            </ModalContainer>
        </>
    );
};

export default Index;
