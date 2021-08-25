import "../scss/App.scss";
// Components
import MainLayout from "components/MainLayout";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Toaster />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
};

export default App;
