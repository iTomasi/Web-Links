import "../scss/App.scss";
// Components
import MainLayout from "components/MainLayout";
import { Toaster } from "react-hot-toast";

// Redux
import { Provider } from "react-redux";
import store from "reduxSrc/store";

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Toaster />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    );
};

export default App;
