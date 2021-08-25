import React from "react";

// Components
import Header from "./Header";

interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="iw_mainLayout">
            <div className="iws_sideBar">
                <div className="iws_circle"></div>
            </div>

            <div className="iws_container">
                <Header />

                <div className="iws_content">{children}</div>
            </div>
        </div>
    );
};

export default MainLayout;
