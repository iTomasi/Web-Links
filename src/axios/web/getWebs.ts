import AxiosBase from "../AxiosBase";

const getWebs = async () => {
    try {
        const { data } = await AxiosBase.get("/api/get-webs");

        if (data.message !== "OK") return { error: data.message };

        return {
            data: data.data,
        };
    } catch (e) {
        console.log(e);
        console.log("Axios/ getWebs error");
        return { error: "Error to connect with the server" };
    }
};

export default getWebs;
