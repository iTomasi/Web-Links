import AxiosBase from "../AxiosBase";

const removeWeb = async (id: string) => {
    try {
        const { data } = await AxiosBase.delete(`/api/remove-web/${id}`);

        if (data.message !== "OK") return { error: data.message };

        return { success: "PRO!" };
    } catch (e) {
        console.log(e);
        console.log("removeWeb Error");
        return { error: "Server Connection error" };
    }
};

export default removeWeb;
