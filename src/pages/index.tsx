import React, { useState, useEffect } from "react";

// Components
import WebCard from "components/WebCard";
import ModalContainer from "components/modal/ModalContainer";
import ModalHandleWeb from "components/modal/ModalHandleWeb";
import FixedAddBtn from "components/FixedAddBtn";

// Types
import { IFormWeb } from "types/Form";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { updateInitialValues } from "reduxSrc/web/webState";

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

    const [isAdding, setIsAdding] = useState<boolean>(true);
    const [showModalForm, setShowModalForm] = useState<boolean>(false);

    useEffect(() => {
        const effectFunc = async () => {
            const data = await updateInitialValues();

            dispatch(data);
        };

        effectFunc();
    }, []);

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
        </>
    );
};

export default Index;
