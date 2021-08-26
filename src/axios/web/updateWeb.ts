import AxiosBase from "../AxiosBase";

// Types
import { IFormWeb } from "types/Form";

interface IUpdateWeb {
    _id: string;
    url: string;
    description: string;
    hashTags: string[];
}

const updateWeb = async (payload: IUpdateWeb) => {
    const { _id, description, hashTags, url } = payload;

    try {
        const { data } = await AxiosBase.put("/api/edit-web/" + _id, payload, {
            headers: { "Content-Type": "application/json" },
        });

        if (data.message !== "OK") return { error: data.message };

        return { success: "Pro!" };
    } catch (e) {
        console.log(e);
        console.log("updateWeb.ts error");
        return { error: "Server Connection Error" };
    }
};

export default updateWeb;
