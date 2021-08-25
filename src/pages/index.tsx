import React, { useState } from "react";

// Components
import WebCard from "components/WebCard";
import ModalContainer from "components/modal/ModalContainer";
import ModalHandleWeb from "components/modal/ModalHandleWeb";

// Types
import { IFormWeb } from "types/Form";

const Index = () => {
    const [formWeb, setFormWeb] = useState<IFormWeb>({
        title: "",
        url: "",
        description: "",
        hashTags: [],
    });

    const [isAdding, setIsAdding] = useState<boolean>(true);
    const [showModalForm, setShowModalForm] = useState<boolean>(true);

    return (
        <>
            <div className="iw_home">
                <div className="iws_grid">
                    <WebCard />
                    <WebCard />
                    <WebCard />
                    <WebCard />
                    <WebCard />
                </div>
            </div>

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
